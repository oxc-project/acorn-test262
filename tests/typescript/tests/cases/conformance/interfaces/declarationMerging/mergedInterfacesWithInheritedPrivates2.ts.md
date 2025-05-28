__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 401,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 34,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 34,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 32,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 31,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 25,
                "end": 31
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 36,
      "end": 71,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 44,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 71,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 51,
            "end": 69,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 68,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 62,
                "end": 68
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 73,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 93,
          "end": 94,
          "expression": {
            "type": "Identifier",
            "start": 93,
            "end": 94,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 95,
        "end": 113,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 101,
            "end": 111,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 110,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 104,
                "end": 110
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 115,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 126,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 135,
          "end": 137,
          "expression": {
            "type": "Identifier",
            "start": 135,
            "end": 137,
            "decorators": [],
            "name": "C2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 138,
        "end": 156,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 144,
            "end": 154,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 144,
              "end": 145,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 145,
              "end": 153,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 147,
                "end": 153
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 158,
      "end": 254,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 164,
        "end": 165,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 174,
        "end": 175,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 187,
          "end": 188,
          "expression": {
            "type": "Identifier",
            "start": 187,
            "end": 188,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 189,
        "end": 254,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 204,
            "end": 222,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 212,
              "end": 213,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 213,
              "end": 221,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 215,
                "end": 221
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 227,
            "end": 237,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 227,
              "end": 228,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 228,
              "end": 236,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 230,
                "end": 236
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 242,
            "end": 252,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 242,
              "end": 243,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 243,
              "end": 251,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 245,
                "end": 251
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 256,
      "end": 345,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 262,
        "end": 263,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 272,
        "end": 274,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 286,
          "end": 287,
          "expression": {
            "type": "Identifier",
            "start": 286,
            "end": 287,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 288,
        "end": 345,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 303,
            "end": 313,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 303,
              "end": 304,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 304,
              "end": 312,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 306,
                "end": 312
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 318,
            "end": 328,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 318,
              "end": 319,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 319,
              "end": 327,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 321,
                "end": 327
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 333,
            "end": 343,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 333,
              "end": 334,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 334,
              "end": 342,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 336,
                "end": 342
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 347,
      "end": 356,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 351,
          "end": 355,
          "id": {
            "type": "Identifier",
            "start": 351,
            "end": 355,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 352,
              "end": 355,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 354,
                "end": 355,
                "typeName": {
                  "type": "Identifier",
                  "start": 354,
                  "end": 355,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 357,
      "end": 369,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 361,
          "end": 368,
          "id": {
            "type": "Identifier",
            "start": 361,
            "end": 362,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 365,
            "end": 368,
            "object": {
              "type": "Identifier",
              "start": 365,
              "end": 366,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 367,
              "end": 368,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 379,
      "end": 392,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 383,
          "end": 391,
          "id": {
            "type": "Identifier",
            "start": 383,
            "end": 385,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 388,
            "end": 391,
            "object": {
              "type": "Identifier",
              "start": 388,
              "end": 389,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 390,
              "end": 391,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
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
