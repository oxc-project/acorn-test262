__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 50
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 53,
                "end": 54
              },
              "operator": "+",
              "right": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 57,
                "end": 59
              },
              "start": 53,
              "end": 59
            },
            "definite": false,
            "start": 49,
            "end": 59
          }
        ],
        "declare": false,
        "start": 43,
        "end": 60
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 36,
      "end": 60
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Aleph",
          "optional": false,
          "typeAnnotation": null,
          "start": 211,
          "end": 216
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null,
                "start": 221,
                "end": 222
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 224,
                  "end": 230
                },
                "start": 222,
                "end": 230
              },
              "accessibility": null,
              "static": false,
              "start": 221,
              "end": 231
            }
          ],
          "start": 217,
          "end": 233
        },
        "declare": false,
        "start": 201,
        "end": 233
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 194,
      "end": 233
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bet",
          "optional": false,
          "typeAnnotation": null,
          "start": 248,
          "end": 251
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Aleph",
              "optional": false,
              "typeAnnotation": null,
              "start": 263,
              "end": 268
            },
            "typeArguments": null,
            "start": 263,
            "end": 268
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null,
                "start": 273,
                "end": 274
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 276,
                  "end": 282
                },
                "start": 274,
                "end": 282
              },
              "value": {
                "type": "Literal",
                "value": "lol",
                "raw": "'lol'",
                "start": 285,
                "end": 290
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 273,
              "end": 291
            }
          ],
          "start": 269,
          "end": 330
        },
        "abstract": false,
        "declare": false,
        "start": 242,
        "end": 330
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 235,
      "end": 330
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 36,
  "end": 330
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 36,
    "end": 42,
    "range": [
      36,
      42
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 43,
    "end": 48,
    "range": [
      43,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 194,
    "end": 200,
    "range": [
      194,
      200
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 201,
    "end": 210,
    "range": [
      201,
      210
    ]
  },
  {
    "type": "Identifier",
    "value": "Aleph",
    "start": 211,
    "end": 216,
    "range": [
      211,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 224,
    "end": 230,
    "range": [
      224,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 235,
    "end": 241,
    "range": [
      235,
      241
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 242,
    "end": 247,
    "range": [
      242,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "Bet",
    "start": 248,
    "end": 251,
    "range": [
      248,
      251
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 252,
    "end": 262,
    "range": [
      252,
      262
    ]
  },
  {
    "type": "Identifier",
    "value": "Aleph",
    "start": 263,
    "end": 268,
    "range": [
      263,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 276,
    "end": 282,
    "range": [
      276,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "String",
    "value": "'lol'",
    "start": 285,
    "end": 290,
    "range": [
      285,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  }
]
```
