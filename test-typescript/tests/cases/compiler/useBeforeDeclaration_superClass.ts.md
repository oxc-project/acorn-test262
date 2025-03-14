useBeforeDeclaration_superClass.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 438,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 22,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 22,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 20,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 18,
              "end": 19,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 181,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 41,
        "end": 181,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 153,
            "end": 168,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 158,
              "decorators": [],
              "name": "old_x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 161,
              "end": 167,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 161,
                "end": 165
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 166,
                "end": 167,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 173,
            "end": 179,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 174,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 177,
              "end": 178,
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 39,
        "end": 40,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 226,
      "end": 248,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 234,
        "end": 248,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 240,
            "end": 246,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 240,
              "end": 241,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 244,
              "end": 245,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 232,
        "end": 233,
        "decorators": [],
        "name": "X",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 249,
      "end": 269,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 267,
        "end": 269,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 255,
        "end": 256,
        "decorators": [],
        "name": "Y",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 265,
        "end": 266,
        "decorators": [],
        "name": "X",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 270,
      "end": 322,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 288,
        "end": 322,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 294,
            "end": 309,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 294,
              "end": 299,
              "decorators": [],
              "name": "old_x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 302,
              "end": 308,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 302,
                "end": 306
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 307,
                "end": 308,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 314,
            "end": 320,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 314,
              "end": 315,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 318,
              "end": 319,
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 276,
        "end": 277,
        "decorators": [],
        "name": "Z",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 286,
        "end": 287,
        "decorators": [],
        "name": "Y",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 351,
      "end": 381,
      "body": {
        "type": "TSInterfaceBody",
        "start": 363,
        "end": 381,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 369,
            "end": 379,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 369,
              "end": 370,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 370,
              "end": 378,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 372,
                "end": 378
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 361,
        "end": 362,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 382,
      "end": 437,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 403,
        "end": 437,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 409,
            "end": 424,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 409,
              "end": 414,
              "decorators": [],
              "name": "old_x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 417,
              "end": 423,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 417,
                "end": 421
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 422,
                "end": 423,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 429,
            "end": 435,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 429,
              "end": 430,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 433,
              "end": 434,
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 388,
        "end": 389,
        "decorators": [],
        "name": "J",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 401,
          "end": 402,
          "expression": {
            "type": "Identifier",
            "start": 401,
            "end": 402,
            "decorators": [],
            "name": "I",
            "optional": false
          }
        }
      ],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
