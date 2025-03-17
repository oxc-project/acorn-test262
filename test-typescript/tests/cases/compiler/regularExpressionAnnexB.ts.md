__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 618,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 230,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 229,
          "definite": false,
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 15,
                    "end": 21,
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 26,
            "end": 229,
            "elements": [
              {
                "type": "Literal",
                "start": 30,
                "end": 62,
                "raw": "/\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s/",
                "regex": {
                  "flags": "",
                  "pattern": "\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 66,
                "end": 100,
                "raw": "/[\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s]/",
                "regex": {
                  "flags": "",
                  "pattern": "[\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 104,
                "end": 116,
                "raw": "/\\P[\\P\\w-_]/",
                "regex": {
                  "flags": "",
                  "pattern": "\\P[\\P\\w-_]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 137,
                "end": 170,
                "raw": "/\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s/u",
                "regex": {
                  "flags": "u",
                  "pattern": "\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 174,
                "end": 209,
                "raw": "/[\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s]/u",
                "regex": {
                  "flags": "u",
                  "pattern": "[\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 213,
                "end": 226,
                "raw": "/\\P[\\P\\w-_]/u",
                "regex": {
                  "flags": "u",
                  "pattern": "\\P[\\P\\w-_]"
                },
                "value": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 232,
      "end": 617,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 238,
          "end": 616,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 238,
            "end": 265,
            "decorators": [],
            "name": "regexesWithBraces",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 255,
              "end": 265,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 257,
                "end": 265,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 257,
                  "end": 263,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 257,
                    "end": 263,
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 268,
            "end": 616,
            "elements": [
              {
                "type": "Literal",
                "start": 272,
                "end": 277,
                "raw": "/{??/",
                "regex": {
                  "flags": "",
                  "pattern": "{??"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 281,
                "end": 287,
                "raw": "/{,??/",
                "regex": {
                  "flags": "",
                  "pattern": "{,??"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 291,
                "end": 298,
                "raw": "/{,1??/",
                "regex": {
                  "flags": "",
                  "pattern": "{,1??"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 302,
                "end": 308,
                "raw": "/{1??/",
                "regex": {
                  "flags": "",
                  "pattern": "{1??"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 312,
                "end": 319,
                "raw": "/{1,??/",
                "regex": {
                  "flags": "",
                  "pattern": "{1,??"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 323,
                "end": 331,
                "raw": "/{1,2??/",
                "regex": {
                  "flags": "",
                  "pattern": "{1,2??"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 335,
                "end": 343,
                "raw": "/{2,1??/",
                "regex": {
                  "flags": "",
                  "pattern": "{2,1??"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 347,
                "end": 353,
                "raw": "/{}??/",
                "regex": {
                  "flags": "",
                  "pattern": "{}??"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 357,
                "end": 364,
                "raw": "/{,}??/",
                "regex": {
                  "flags": "",
                  "pattern": "{,}??"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 368,
                "end": 376,
                "raw": "/{,1}??/",
                "regex": {
                  "flags": "",
                  "pattern": "{,1}??"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 380,
                "end": 387,
                "raw": "/{1}??/",
                "regex": {
                  "flags": "",
                  "pattern": "{1}??"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 391,
                "end": 399,
                "raw": "/{1,}??/",
                "regex": {
                  "flags": "",
                  "pattern": "{1,}??"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 403,
                "end": 412,
                "raw": "/{1,2}??/",
                "regex": {
                  "flags": "",
                  "pattern": "{1,2}??"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 416,
                "end": 425,
                "raw": "/{2,1}??/",
                "regex": {
                  "flags": "",
                  "pattern": "{2,1}??"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 446,
                "end": 452,
                "raw": "/{??/u",
                "regex": {
                  "flags": "u",
                  "pattern": "{??"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 456,
                "end": 463,
                "raw": "/{,??/u",
                "regex": {
                  "flags": "u",
                  "pattern": "{,??"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 467,
                "end": 475,
                "raw": "/{,1??/u",
                "regex": {
                  "flags": "u",
                  "pattern": "{,1??"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 479,
                "end": 486,
                "raw": "/{1??/u",
                "regex": {
                  "flags": "u",
                  "pattern": "{1??"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 490,
                "end": 498,
                "raw": "/{1,??/u",
                "regex": {
                  "flags": "u",
                  "pattern": "{1,??"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 502,
                "end": 511,
                "raw": "/{1,2??/u",
                "regex": {
                  "flags": "u",
                  "pattern": "{1,2??"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 515,
                "end": 524,
                "raw": "/{2,1??/u",
                "regex": {
                  "flags": "u",
                  "pattern": "{2,1??"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 528,
                "end": 535,
                "raw": "/{}??/u",
                "regex": {
                  "flags": "u",
                  "pattern": "{}??"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 539,
                "end": 547,
                "raw": "/{,}??/u",
                "regex": {
                  "flags": "u",
                  "pattern": "{,}??"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 551,
                "end": 560,
                "raw": "/{,1}??/u",
                "regex": {
                  "flags": "u",
                  "pattern": "{,1}??"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 564,
                "end": 572,
                "raw": "/{1}??/u",
                "regex": {
                  "flags": "u",
                  "pattern": "{1}??"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 576,
                "end": 585,
                "raw": "/{1,}??/u",
                "regex": {
                  "flags": "u",
                  "pattern": "{1,}??"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 589,
                "end": 599,
                "raw": "/{1,2}??/u",
                "regex": {
                  "flags": "u",
                  "pattern": "{1,2}??"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 603,
                "end": 613,
                "raw": "/{2,1}??/u",
                "regex": {
                  "flags": "u",
                  "pattern": "{2,1}??"
                },
                "value": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
