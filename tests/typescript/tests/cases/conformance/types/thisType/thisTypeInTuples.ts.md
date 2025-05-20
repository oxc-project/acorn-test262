__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 145,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 41,
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 41,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 25,
            "end": 39,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 30,
              "decorators": [],
              "name": "slice",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 38,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 34,
                "end": 38
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Array",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 82,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 66,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 66,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 50,
                "end": 66,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 51,
                    "end": 57
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 59,
                    "end": 65
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 69,
            "end": 82,
            "elements": [
              {
                "type": "Literal",
                "start": 70,
                "end": 72,
                "raw": "42",
                "value": 42
              },
              {
                "type": "Literal",
                "start": 74,
                "end": 81,
                "raw": "\"hello\"",
                "value": "hello"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 84,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 101,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 89,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 92,
            "end": 101,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 92,
              "end": 99,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 92,
                "end": 93,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 94,
                "end": 99,
                "decorators": [],
                "name": "slice",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 103,
      "end": 122,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 121,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 111,
            "end": 121,
            "arguments": [
              {
                "type": "Literal",
                "start": 119,
                "end": 120,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 111,
              "end": 118,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 111,
                "end": 112,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 113,
                "end": 118,
                "decorators": [],
                "name": "slice",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 123,
      "end": 145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 144,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 128,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 131,
            "end": 144,
            "arguments": [
              {
                "type": "Literal",
                "start": 139,
                "end": 140,
                "raw": "0",
                "value": 0
              },
              {
                "type": "Literal",
                "start": 142,
                "end": 143,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 131,
              "end": 138,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 131,
                "end": 132,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 133,
                "end": 138,
                "decorators": [],
                "name": "slice",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
