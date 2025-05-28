__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 437,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 22,
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
        "end": 22,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 20,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 18,
              "end": 19,
              "value": 0,
              "raw": "0"
            },
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
      "start": 23,
      "end": 181,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 39,
        "end": 40,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 41,
        "end": 181,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 153,
            "end": 168,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 158,
              "decorators": [],
              "name": "old_x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 161,
              "end": 167,
              "object": {
                "type": "ThisExpression",
                "start": 161,
                "end": 165
              },
              "property": {
                "type": "Identifier",
                "start": 166,
                "end": 167,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
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
            "start": 173,
            "end": 179,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 174,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 177,
              "end": 178,
              "value": 1,
              "raw": "1"
            },
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
      "start": 226,
      "end": 248,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 232,
        "end": 233,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 234,
        "end": 248,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 240,
            "end": 246,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 240,
              "end": 241,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 244,
              "end": 245,
              "value": 0,
              "raw": "0"
            },
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
      "start": 249,
      "end": 269,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 255,
        "end": 256,
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 265,
        "end": 266,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 267,
        "end": 269,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 270,
      "end": 322,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 276,
        "end": 277,
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 286,
        "end": 287,
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 288,
        "end": 322,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 294,
            "end": 309,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 294,
              "end": 299,
              "decorators": [],
              "name": "old_x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 302,
              "end": 308,
              "object": {
                "type": "ThisExpression",
                "start": 302,
                "end": 306
              },
              "property": {
                "type": "Identifier",
                "start": 307,
                "end": 308,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
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
            "start": 314,
            "end": 320,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 314,
              "end": 315,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 318,
              "end": 319,
              "value": 1,
              "raw": "1"
            },
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
      "type": "TSInterfaceDeclaration",
      "start": 351,
      "end": 381,
      "id": {
        "type": "Identifier",
        "start": 361,
        "end": 362,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 369,
              "end": 370,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 370,
              "end": 378,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 372,
                "end": 378
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
      "start": 382,
      "end": 437,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 388,
        "end": 389,
        "decorators": [],
        "name": "J",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
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
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 403,
        "end": 437,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 409,
            "end": 424,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 409,
              "end": 414,
              "decorators": [],
              "name": "old_x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 417,
              "end": 423,
              "object": {
                "type": "ThisExpression",
                "start": 417,
                "end": 421
              },
              "property": {
                "type": "Identifier",
                "start": 422,
                "end": 423,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
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
            "start": 429,
            "end": 435,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 429,
              "end": 430,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 433,
              "end": 434,
              "value": 1,
              "raw": "1"
            },
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
