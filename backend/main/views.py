from django.http import JsonResponse

ZODIAC_ELEMENTS = {
    "aries": "fire",
    "leo": "fire",
    "sagittarius": "fire",
    "taurus": "earth",
    "virgo": "earth",
    "capricorn": "earth",
    "gemini": "air",
    "libra": "air",
    "aquarius": "air",
    "cancer": "water",
    "scorpio": "water",
    "pisces": "water",
}

ELEMENT_LABELS = {
    "fire": "불(Fire)",
    "earth": "흙(Earth)",
    "air": "공기(Air)",
    "water": "물(Water)",
}

COMPATIBLE_PAIRS = {
    ("fire", "air"),
    ("air", "fire"),
    ("earth", "water"),
    ("water", "earth"),
}

OPPOSING_PAIRS = {
    ("fire", "water"),
    ("water", "fire"),
    ("earth", "air"),
    ("air", "earth"),
}

NEUTRAL_PAIRS = {
    ("earth", "fire"),
    ("fire", "earth"),
}


def ZodiacCompatibilityView(request):
    sign1 = request.GET.get("sign1", "").lower()
    sign2 = request.GET.get("sign2", "").lower()

    if not sign1 or not sign2:
        return JsonResponse(
            {"error": "sign1과 sign2 파라미터가 필요합니다."},
            status=400,
        )

    element1 = ZODIAC_ELEMENTS.get(sign1)
    element2 = ZODIAC_ELEMENTS.get(sign2)

    if element1 is None:
        return JsonResponse(
            {"error": f"알 수 없는 별자리입니다: '{sign1}'"},
            status=400,
        )
    if element2 is None:
        return JsonResponse(
            {"error": f"알 수 없는 별자리입니다: '{sign2}'"},
            status=400,
        )

    if element1 == element2:
        score, compatibility, message = 100, "same", "말하지 않아도 통하는 최고의 파트너!"
    elif (element1, element2) in COMPATIBLE_PAIRS:
        score, compatibility, message = 70, "compatible", "서로에게 영감을 주는 찰떡궁합"
    elif (element1, element2) in OPPOSING_PAIRS:
        score, compatibility, message = 30, "opposing", "이해하기 위해 노력이 필요한 사이"
    elif (element1, element2) in NEUTRAL_PAIRS:
        score, compatibility, message = 40, "neutral", "각자의 속도가 다른 동반자"
    else:
        score, compatibility, message = 50, "unknown", "알 수 없는 궁합"

    return JsonResponse({
        "sign1": {
            "name": sign1,
            "element": element1,
            "element_label": ELEMENT_LABELS[element1],
        },
        "sign2": {
            "name": sign2,
            "element": element2,
            "element_label": ELEMENT_LABELS[element2],
        },
        "score": score,
        "compatibility": compatibility,
        "message": message,
    })
