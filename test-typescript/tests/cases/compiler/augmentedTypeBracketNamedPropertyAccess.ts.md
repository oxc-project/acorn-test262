augmentedTypeBracketNamedPropertyAccess.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 318,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 38,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 38,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 23,
            "end": 36,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 27,
              "decorators": [],
              "name": "data",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 35,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 29,
                "end": 35
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "Object",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 39,
      "end": 87,
      "body": {
        "type": "TSInterfaceBody",
        "start": 58,
        "end": 87,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 64,
            "end": 85,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 76,
              "decorators": [],
              "name": "functionData",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 84,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 78,
                "end": 84
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 57,
        "decorators": [],
        "name": "Function",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 88,
      "end": 99,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 98,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 93,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 96,
            "end": 98,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 100,
      "end": 124,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 123,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 105,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 108,
            "end": 123,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 120,
              "end": 123,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 126,
      "end": 145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 144,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 132,
            "decorators": [],
            "name": "r1",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 135,
            "end": 144,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "decorators": [],
              "name": "o",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 137,
              "end": 143,
              "raw": "'data'",
              "value": "data"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 193,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 192,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 172,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 175,
            "end": 192,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 175,
              "end": 176,
              "decorators": [],
              "name": "o",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 177,
              "end": 191,
              "raw": "'functionData'",
              "value": "functionData"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 231,
      "end": 258,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 257,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 237,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 240,
            "end": 257,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 240,
              "end": 241,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 242,
              "end": 256,
              "raw": "'functionData'",
              "value": "functionData"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 279,
      "end": 298,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 297,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 285,
            "decorators": [],
            "name": "r4",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 288,
            "end": 297,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 288,
              "end": 289,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 290,
              "end": 296,
              "raw": "'data'",
              "value": "data"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
