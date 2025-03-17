__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 146,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "name": "Array",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 41,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 25,
            "end": 39,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 30,
              "name": "slice",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 66,
            "name": "t",
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
            },
            "decorators": [],
            "optional": false
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
                "value": 42,
                "raw": "42"
              },
              {
                "type": "Literal",
                "start": 74,
                "end": 81,
                "value": "hello",
                "raw": "\"hello\""
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 89,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 92,
            "end": 101,
            "callee": {
              "type": "MemberExpression",
              "start": 92,
              "end": 99,
              "object": {
                "type": "Identifier",
                "start": 92,
                "end": 93,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 94,
                "end": 99,
                "name": "slice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 111,
            "end": 121,
            "callee": {
              "type": "MemberExpression",
              "start": 111,
              "end": 118,
              "object": {
                "type": "Identifier",
                "start": 111,
                "end": 112,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 113,
                "end": 118,
                "name": "slice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 119,
                "end": 120,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 128,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 131,
            "end": 144,
            "callee": {
              "type": "MemberExpression",
              "start": 131,
              "end": 138,
              "object": {
                "type": "Identifier",
                "start": 131,
                "end": 132,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 133,
                "end": 138,
                "name": "slice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 139,
                "end": 140,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 142,
                "end": 143,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
