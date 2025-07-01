__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              },
              "start": 15,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 20
        }
      ],
      "declare": true,
      "start": 0,
      "end": 21
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 90
          },
          "start": 86,
          "end": 90
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 99
      },
      "typeParameters": null,
      "superClass": {
        "type": "ClassExpression",
        "decorators": [],
        "id": null,
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 114,
          "end": 117
        },
        "abstract": false,
        "declare": false,
        "start": 108,
        "end": 117
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 141,
                    "end": 146
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 147,
                    "end": 151
                  },
                  "optional": false,
                  "computed": false,
                  "start": 141,
                  "end": 151
                },
                "directive": null,
                "start": 141,
                "end": 152
              }
            ],
            "start": 124,
            "end": 158
          }
        ],
        "start": 118,
        "end": 160
      },
      "abstract": false,
      "declare": false,
      "start": 86,
      "end": 160
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null,
            "start": 229,
            "end": 232
          },
          "start": 228,
          "end": 232
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 241
      },
      "typeParameters": null,
      "superClass": {
        "type": "TSAsExpression",
        "expression": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 262,
            "end": 264
          },
          "expression": false,
          "start": 251,
          "end": 264
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 268,
          "end": 271
        },
        "start": 251,
        "end": 271
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 296,
                    "end": 301
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 302,
                    "end": 306
                  },
                  "optional": false,
                  "computed": false,
                  "start": 296,
                  "end": 306
                },
                "directive": null,
                "start": 296,
                "end": 307
              }
            ],
            "start": 279,
            "end": 313
          }
        ],
        "start": 273,
        "end": 315
      },
      "abstract": false,
      "declare": false,
      "start": 228,
      "end": 315
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null,
            "start": 379,
            "end": 382
          },
          "start": 378,
          "end": 382
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 389,
        "end": 391
      },
      "typeParameters": null,
      "superClass": {
        "type": "TSAsExpression",
        "expression": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 408,
            "end": 410
          },
          "id": null,
          "generator": false,
          "start": 402,
          "end": 410
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 415,
          "end": 418
        },
        "start": 401,
        "end": 418
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 443,
                    "end": 448
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 449,
                    "end": 453
                  },
                  "optional": false,
                  "computed": false,
                  "start": 443,
                  "end": 453
                },
                "directive": null,
                "start": 443,
                "end": 454
              }
            ],
            "start": 426,
            "end": 460
          }
        ],
        "start": 420,
        "end": 462
      },
      "abstract": false,
      "declare": false,
      "start": 378,
      "end": 462
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 462
}
```
