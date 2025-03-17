__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 136,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 26,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 26,
            "name": "decorator",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 26,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 23,
                "end": 26
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 29,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 36,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 37,
        "end": 136,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 43,
            "end": 72,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 43,
                "end": 55,
                "expression": {
                  "type": "CallExpression",
                  "start": 44,
                  "end": 55,
                  "callee": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 53,
                    "name": "decorator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 71,
              "typeAnnotation": {
                "type": "TSJSDocNullableType",
                "start": 64,
                "end": 71,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 62,
                  "end": 70,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 64,
                    "end": 70
                  }
                },
                "id": 0,
                "original": null,
                "emitNode": null,
                "postfix": true
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 77,
            "end": 106,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 77,
                "end": 89,
                "expression": {
                  "type": "CallExpression",
                  "start": 78,
                  "end": 89,
                  "callee": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 87,
                    "name": "decorator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 105,
              "typeAnnotation": {
                "type": "TSJSDocNonNullableType",
                "start": 98,
                "end": 105,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 96,
                  "end": 104,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 98,
                    "end": 104
                  }
                },
                "id": 0,
                "original": null,
                "emitNode": null,
                "postfix": true
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 111,
            "end": 134,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 111,
                "end": 123,
                "expression": {
                  "type": "CallExpression",
                  "start": 112,
                  "end": 123,
                  "callee": {
                    "type": "Identifier",
                    "start": 112,
                    "end": 121,
                    "name": "decorator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 133,
              "typeAnnotation": {
                "type": "TSJSDocAllType",
                "start": 132,
                "end": 133,
                "id": 0,
                "original": null,
                "emitNode": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
