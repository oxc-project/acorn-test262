__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2520,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 2520,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 2519,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 23,
            "decorators": [],
            "name": "regexes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 23,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 15,
                "end": 23,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 15,
                  "end": 21,
                  "typeName": {
                    "type": "Identifier",
                    "start": 15,
                    "end": 21,
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 26,
            "end": 2519,
            "elements": [
              {
                "type": "Literal",
                "start": 39,
                "end": 60,
                "value": null,
                "raw": "/foo/visualstudiocode",
                "regex": {
                  "pattern": "foo",
                  "flags": "acddeiiloosstuuv"
                }
              },
              {
                "type": "Literal",
                "start": 85,
                "end": 101,
                "value": null,
                "raw": "/(?med-ium:bar)/",
                "regex": {
                  "pattern": "(?med-ium:bar)",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 125,
                "end": 129,
                "value": null,
                "raw": "/\\0/",
                "regex": {
                  "pattern": "\\0",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 132,
                "end": 136,
                "value": null,
                "raw": "/\\1/",
                "regex": {
                  "pattern": "\\1",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 139,
                "end": 143,
                "value": null,
                "raw": "/\\2/",
                "regex": {
                  "pattern": "\\2",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 146,
                "end": 154,
                "value": null,
                "raw": "/(hi)\\1/",
                "regex": {
                  "pattern": "(hi)\\1",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 157,
                "end": 174,
                "value": null,
                "raw": "/(hi) (hello) \\2/",
                "regex": {
                  "pattern": "(hi) (hello) \\2",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 177,
                "end": 234,
                "value": null,
                "raw": "/\\2()(\\12)(foo)\\1\\0[\\0\\1\\01\\123\\08\\8](\\3\\03)\\5\\005\\9\\009/",
                "regex": {
                  "pattern": "\\2()(\\12)(foo)\\1\\0[\\0\\1\\01\\123\\08\\8](\\3\\03)\\5\\005\\9\\009",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 237,
                "end": 295,
                "value": null,
                "raw": "/\\2()(\\12)(foo)\\1\\0[\\0\\1\\01\\123\\08\\8](\\3\\03)\\5\\005\\9\\009/u",
                "regex": {
                  "pattern": "\\2()(\\12)(foo)\\1\\0[\\0\\1\\01\\123\\08\\8](\\3\\03)\\5\\005\\9\\009",
                  "flags": "u"
                }
              },
              {
                "type": "Literal",
                "start": 298,
                "end": 360,
                "value": null,
                "raw": "/(?<foo>)((?<bar>bar)bar)(?<baz>baz)|(foo(?<foo>foo))(?<baz>)/",
                "regex": {
                  "pattern": "(?<foo>)((?<bar>bar)bar)(?<baz>baz)|(foo(?<foo>foo))(?<baz>)",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 363,
                "end": 431,
                "value": null,
                "raw": "/(\\k<bar>)\\k<absent>(?<foo>foo)|(?<bar>)((?<foo>)|(bar(?<bar>bar)))/",
                "regex": {
                  "pattern": "(\\k<bar>)\\k<absent>(?<foo>foo)|(?<bar>)((?<foo>)|(bar(?<bar>bar)))",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 450,
                "end": 520,
                "value": null,
                "raw": "/{}{1,2}_{3}.{4,}?(foo){008}${32,16}\\b{064,128}.+&*?\\???\\n{,256}{\\\\{,/",
                "regex": {
                  "pattern": "{}{1,2}_{3}.{4,}?(foo){008}${32,16}\\b{064,128}.+&*?\\???\\n{,256}{\\\\{,",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 545,
                "end": 583,
                "value": null,
                "raw": "/[-A-Za-z-z-aZ-A\\d_-\\d-.-.\\r-\\n\\w-\\W]/",
                "regex": {
                  "pattern": "[-A-Za-z-z-aZ-A\\d_-\\d-.-.\\r-\\n\\w-\\W]",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 586,
                "end": 656,
                "value": null,
                "raw": "/\\p{L}\\p{gc=L}\\p{ASCII}\\p{Invalid}[\\p{L}\\p{gc=L}\\P{ASCII}\\p{Invalid}]/",
                "regex": {
                  "pattern": "\\p{L}\\p{gc=L}\\p{ASCII}\\p{Invalid}[\\p{L}\\p{gc=L}\\P{ASCII}\\p{Invalid}]",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 659,
                "end": 730,
                "value": null,
                "raw": "/\\p{L}\\p{gc=L}\\p{ASCII}\\p{Invalid}[\\p{L}\\p{gc=L}\\P{ASCII}\\p{Invalid}]/u",
                "regex": {
                  "pattern": "\\p{L}\\p{gc=L}\\p{ASCII}\\p{Invalid}[\\p{L}\\p{gc=L}\\P{ASCII}\\p{Invalid}]",
                  "flags": "u"
                }
              },
              {
                "type": "Literal",
                "start": 733,
                "end": 804,
                "value": null,
                "raw": "/\\p{L}\\p{gc=L}\\p{ASCII}\\p{Invalid}[\\p{L}\\p{gc=L}\\P{ASCII}\\p{Invalid}]/v",
                "regex": {
                  "pattern": "\\p{L}\\p{gc=L}\\p{ASCII}\\p{Invalid}[\\p{L}\\p{gc=L}\\P{ASCII}\\p{Invalid}]",
                  "flags": "v"
                }
              },
              {
                "type": "Literal",
                "start": 807,
                "end": 872,
                "value": null,
                "raw": "/\\p{InvalidProperty=Value}\\p{=}\\p{sc=}\\P{=foo}[\\p{}\\p\\\\\\P\\P{]\\p{/",
                "regex": {
                  "pattern": "\\p{InvalidProperty=Value}\\p{=}\\p{sc=}\\P{=foo}[\\p{}\\p\\\\\\P\\P{]\\p{",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 875,
                "end": 941,
                "value": null,
                "raw": "/\\p{InvalidProperty=Value}\\p{=}\\p{sc=}\\P{=foo}[\\p{}\\p\\\\\\P\\P{]\\p{/u",
                "regex": {
                  "pattern": "\\p{InvalidProperty=Value}\\p{=}\\p{sc=}\\P{=foo}[\\p{}\\p\\\\\\P\\P{]\\p{",
                  "flags": "u"
                }
              },
              {
                "type": "Literal",
                "start": 944,
                "end": 1010,
                "value": null,
                "raw": "/\\p{InvalidProperty=Value}\\p{=}\\p{sc=}\\P{=foo}[\\p{}\\p\\\\\\P\\P{]\\p{/v",
                "regex": {
                  "pattern": "\\p{InvalidProperty=Value}\\p{=}\\p{sc=}\\P{=foo}[\\p{}\\p\\\\\\P\\P{]\\p{",
                  "flags": "v"
                }
              },
              {
                "type": "Literal",
                "start": 1013,
                "end": 1070,
                "value": null,
                "raw": "/\\p{RGI_Emoji}\\P{RGI_Emoji}[^\\p{RGI_Emoji}\\P{RGI_Emoji}]/",
                "regex": {
                  "pattern": "\\p{RGI_Emoji}\\P{RGI_Emoji}[^\\p{RGI_Emoji}\\P{RGI_Emoji}]",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 1073,
                "end": 1131,
                "value": null,
                "raw": "/\\p{RGI_Emoji}\\P{RGI_Emoji}[^\\p{RGI_Emoji}\\P{RGI_Emoji}]/u",
                "regex": {
                  "pattern": "\\p{RGI_Emoji}\\P{RGI_Emoji}[^\\p{RGI_Emoji}\\P{RGI_Emoji}]",
                  "flags": "u"
                }
              },
              {
                "type": "Literal",
                "start": 1134,
                "end": 1192,
                "value": null,
                "raw": "/\\p{RGI_Emoji}\\P{RGI_Emoji}[^\\p{RGI_Emoji}\\P{RGI_Emoji}]/v",
                "regex": {
                  "pattern": "\\p{RGI_Emoji}\\P{RGI_Emoji}[^\\p{RGI_Emoji}\\P{RGI_Emoji}]",
                  "flags": "v"
                }
              },
              {
                "type": "Literal",
                "start": 1217,
                "end": 1241,
                "value": null,
                "raw": "/\\c[\\c0\\ca\\cQ\\c\\C]\\c1\\C/",
                "regex": {
                  "pattern": "\\c[\\c0\\ca\\cQ\\c\\C]\\c1\\C",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 1244,
                "end": 1269,
                "value": null,
                "raw": "/\\c[\\c0\\ca\\cQ\\c\\C]\\c1\\C/u",
                "regex": {
                  "pattern": "\\c[\\c0\\ca\\cQ\\c\\C]\\c1\\C",
                  "flags": "u"
                }
              },
              {
                "type": "Literal",
                "start": 1272,
                "end": 1317,
                "value": null,
                "raw": "/\\q\\\\\\`[\\q\\\\\\`[\\Q\\\\\\Q{\\q{foo|bar|baz]\\q{]\\q{/",
                "regex": {
                  "pattern": "\\q\\\\\\`[\\q\\\\\\`[\\Q\\\\\\Q{\\q{foo|bar|baz]\\q{]\\q{",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 1320,
                "end": 1366,
                "value": null,
                "raw": "/\\q\\\\\\`[\\q\\\\\\`[\\Q\\\\\\Q{\\q{foo|bar|baz]\\q{]\\q{/u",
                "regex": {
                  "pattern": "\\q\\\\\\`[\\q\\\\\\`[\\Q\\\\\\Q{\\q{foo|bar|baz]\\q{]\\q{",
                  "flags": "u"
                }
              },
              {
                "type": "Literal",
                "start": 1369,
                "end": 1415,
                "value": null,
                "raw": "/\\q\\\\\\`[\\q\\\\\\`[\\Q\\\\\\Q{\\q{foo|bar|baz]\\q{]\\q{/v",
                "regex": {
                  "pattern": "\\q\\\\\\`[\\q\\\\\\`[\\Q\\\\\\Q{\\q{foo|bar|baz]\\q{]\\q{",
                  "flags": "v"
                }
              },
              {
                "type": "Literal",
                "start": 1444,
                "end": 1529,
                "value": null,
                "raw": "/[a--b[--][\\d++[]]&&[[&0-9--]&&[\\p{L}]--\\P{L}-_-]]&&&\\q{foo}[0---9][&&q&&&\\q{bar}&&]/",
                "regex": {
                  "pattern": "[a--b[--][\\d++[]]&&[[&0-9--]&&[\\p{L}]--\\P{L}-_-]]&&&\\q{foo}[0---9][&&q&&&\\q{bar}&&]",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 1532,
                "end": 1618,
                "value": null,
                "raw": "/[a--b[--][\\d++[]]&&[[&0-9--]&&[\\p{L}]--\\P{L}-_-]]&&&\\q{foo}[0---9][&&q&&&\\q{bar}&&]/u",
                "regex": {
                  "pattern": "[a--b[--][\\d++[]]&&[[&0-9--]&&[\\p{L}]--\\P{L}-_-]]&&&\\q{foo}[0---9][&&q&&&\\q{bar}&&]",
                  "flags": "u"
                }
              },
              {
                "type": "Literal",
                "start": 1621,
                "end": 1707,
                "value": null,
                "raw": "/[a--b[--][\\d++[]]&&[[&0-9--]&&[\\p{L}]--\\P{L}-_-]]&&&\\q{foo}[0---9][&&q&&&\\q{bar}&&]/v",
                "regex": {
                  "pattern": "[a--b[--][\\d++[]]&&[[&0-9--]&&[\\p{L}]--\\P{L}-_-]]&&&\\q{foo}[0---9][&&q&&&\\q{bar}&&]",
                  "flags": "v"
                }
              },
              {
                "type": "Literal",
                "start": 1710,
                "end": 1786,
                "value": null,
                "raw": "/[[^\\P{Decimal_Number}&&[0-9]]&&\\p{L}&&\\p{ID_Continue}--\\p{ASCII}\\p{CWCF}]/v",
                "regex": {
                  "pattern": "[[^\\P{Decimal_Number}&&[0-9]]&&\\p{L}&&\\p{ID_Continue}--\\p{ASCII}\\p{CWCF}]",
                  "flags": "v"
                }
              },
              {
                "type": "Literal",
                "start": 1789,
                "end": 1871,
                "value": null,
                "raw": "/[^\\p{Emoji}\\p{RGI_Emoji}][^\\p{Emoji}--\\p{RGI_Emoji}][^\\p{Emoji}&&\\p{RGI_Emoji}]/v",
                "regex": {
                  "pattern": "[^\\p{Emoji}\\p{RGI_Emoji}][^\\p{Emoji}--\\p{RGI_Emoji}][^\\p{Emoji}&&\\p{RGI_Emoji}]",
                  "flags": "v"
                }
              },
              {
                "type": "Literal",
                "start": 1874,
                "end": 1956,
                "value": null,
                "raw": "/[^\\p{RGI_Emoji}\\p{Emoji}][^\\p{RGI_Emoji}--\\p{Emoji}][^\\p{RGI_Emoji}&&\\p{Emoji}]/v",
                "regex": {
                  "pattern": "[^\\p{RGI_Emoji}\\p{Emoji}][^\\p{RGI_Emoji}--\\p{Emoji}][^\\p{RGI_Emoji}&&\\p{Emoji}]",
                  "flags": "v"
                }
              },
              {
                "type": "Literal",
                "start": 1959,
                "end": 2035,
                "value": null,
                "raw": "/[^\\p{RGI_Emoji}\\q{foo}][^\\p{RGI_Emoji}--\\q{foo}][^\\p{RGI_Emoji}&&\\q{foo}]/v",
                "regex": {
                  "pattern": "[^\\p{RGI_Emoji}\\q{foo}][^\\p{RGI_Emoji}--\\q{foo}][^\\p{RGI_Emoji}&&\\q{foo}]",
                  "flags": "v"
                }
              },
              {
                "type": "Literal",
                "start": 2038,
                "end": 2132,
                "value": null,
                "raw": "/[^\\p{Emoji}[[\\p{RGI_Emoji}]]][^\\p{Emoji}--[[\\p{RGI_Emoji}]]][^\\p{Emoji}&&[[\\p{RGI_Emoji}]]]/v",
                "regex": {
                  "pattern": "[^\\p{Emoji}[[\\p{RGI_Emoji}]]][^\\p{Emoji}--[[\\p{RGI_Emoji}]]][^\\p{Emoji}&&[[\\p{RGI_Emoji}]]]",
                  "flags": "v"
                }
              },
              {
                "type": "Literal",
                "start": 2135,
                "end": 2229,
                "value": null,
                "raw": "/[^[[\\p{RGI_Emoji}]]\\p{Emoji}][^[[\\p{RGI_Emoji}]]--\\p{Emoji}][^[[\\p{RGI_Emoji}]]&&\\p{Emoji}]/v",
                "regex": {
                  "pattern": "[^[[\\p{RGI_Emoji}]]\\p{Emoji}][^[[\\p{RGI_Emoji}]]--\\p{Emoji}][^[[\\p{RGI_Emoji}]]&&\\p{Emoji}]",
                  "flags": "v"
                }
              },
              {
                "type": "Literal",
                "start": 2232,
                "end": 2320,
                "value": null,
                "raw": "/[^[[\\p{RGI_Emoji}]]\\q{foo}][^[[\\p{RGI_Emoji}]]--\\q{foo}][^[[\\p{RGI_Emoji}]]&&\\q{foo}]/v",
                "regex": {
                  "pattern": "[^[[\\p{RGI_Emoji}]]\\q{foo}][^[[\\p{RGI_Emoji}]]--\\q{foo}][^[[\\p{RGI_Emoji}]]&&\\q{foo}]",
                  "flags": "v"
                }
              },
              {
                "type": "Literal",
                "start": 2323,
                "end": 2413,
                "value": null,
                "raw": "/[^\\q{foo|bar|baz}--\\q{foo}--\\q{bar}--\\q{baz}][^\\p{L}--\\q{foo}--[\\q{bar}]--[^[\\q{baz}]]]/v",
                "regex": {
                  "pattern": "[^\\q{foo|bar|baz}--\\q{foo}--\\q{bar}--\\q{baz}][^\\p{L}--\\q{foo}--[\\q{bar}]--[^[\\q{baz}]]]",
                  "flags": "v"
                }
              },
              {
                "type": "Literal",
                "start": 2416,
                "end": 2516,
                "value": null,
                "raw": "/[^[[\\q{foo|bar|baz}]]--\\q{foo}--\\q{bar}--\\q{baz}][^[^[^\\p{L}]]--\\q{foo}--[\\q{bar}]--[^[\\q{baz}]]]/v",
                "regex": {
                  "pattern": "[^[[\\q{foo|bar|baz}]]--\\q{foo}--\\q{bar}--\\q{baz}][^[^[^\\p{L}]]--\\q{foo}--[\\q{bar}]--[^[\\q{baz}]]]",
                  "flags": "v"
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
