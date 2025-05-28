__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 194,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 28,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 28,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 26,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 53,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 52,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 37,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 37,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 36,
                "end": 37,
                "typeName": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 40,
            "end": 52,
            "properties": [
              {
                "type": "Property",
                "start": 44,
                "end": 50,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 45,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 47,
                  "end": 50,
                  "value": 123,
                  "raw": "123"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 55,
      "end": 66,
      "expression": {
        "type": "UnaryExpression",
        "start": 55,
        "end": 65,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 62,
          "end": 65,
          "object": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 68,
      "end": 114,
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 79,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 80,
        "end": 114,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 84,
            "end": 112,
            "parameters": [
              {
                "type": "Identifier",
                "start": 94,
                "end": 103,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 95,
                  "end": 103,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 97,
                    "end": 103
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 112,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 106,
                "end": 112
              }
            },
            "readonly": true,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 148,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 147,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 124,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 124,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 123,
                "end": 124,
                "typeName": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 124,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 127,
            "end": 147,
            "properties": [
              {
                "type": "Property",
                "start": 131,
                "end": 145,
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 131,
                  "end": 137,
                  "value": "test",
                  "raw": "'test'"
                },
                "value": {
                  "type": "Literal",
                  "start": 139,
                  "end": 145,
                  "value": "test",
                  "raw": "'test'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 150,
      "end": 167,
      "expression": {
        "type": "UnaryExpression",
        "start": 150,
        "end": 166,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 157,
          "end": 166,
          "object": {
            "type": "Identifier",
            "start": 157,
            "end": 158,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 159,
            "end": 165,
            "value": "test",
            "raw": "'test'"
          },
          "optional": false,
          "computed": true
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 169,
      "end": 194,
      "expression": {
        "type": "UnaryExpression",
        "start": 169,
        "end": 193,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 180,
          "end": 189,
          "object": {
            "type": "Identifier",
            "start": 180,
            "end": 181,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 182,
            "end": 188,
            "value": "test",
            "raw": "'test'"
          },
          "optional": false,
          "computed": true
        },
        "prefix": true
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
