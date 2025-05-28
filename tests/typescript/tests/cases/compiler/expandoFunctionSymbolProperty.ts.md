__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 68,
  "end": 252,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 68,
      "end": 90,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 74,
          "end": 89,
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 78,
            "decorators": [],
            "name": "symb",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 81,
            "end": 89,
            "callee": {
              "type": "Identifier",
              "start": 81,
              "end": 87,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 92,
      "end": 154,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 110,
        "decorators": [],
        "name": "TestSymb",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 111,
        "end": 154,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 115,
            "end": 124,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 123,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 119,
                "end": 123
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 127,
            "end": 152,
            "computed": true,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 141,
              "decorators": [],
              "name": "symb",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 151,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 144,
                "end": 151
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
      "type": "ExportNamedDeclaration",
      "start": 156,
      "end": 252,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 163,
        "end": 252,
        "id": {
          "type": "Identifier",
          "start": 172,
          "end": 176,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 178,
          "end": 188,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 180,
            "end": 188,
            "typeName": {
              "type": "Identifier",
              "start": 180,
              "end": 188,
              "decorators": [],
              "name": "TestSymb",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 189,
          "end": 252,
          "body": [
            {
              "type": "FunctionDeclaration",
              "start": 193,
              "end": 212,
              "id": {
                "type": "Identifier",
                "start": 202,
                "end": 207,
                "decorators": [],
                "name": "inner",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 210,
                "end": 212,
                "body": []
              },
              "expression": false
            },
            {
              "type": "ExpressionStatement",
              "start": 215,
              "end": 234,
              "expression": {
                "type": "AssignmentExpression",
                "start": 215,
                "end": 233,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 215,
                  "end": 226,
                  "object": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 220,
                    "decorators": [],
                    "name": "inner",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 221,
                    "end": 225,
                    "decorators": [],
                    "name": "symb",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                },
                "right": {
                  "type": "Literal",
                  "start": 229,
                  "end": 233,
                  "value": true,
                  "raw": "true"
                }
              },
              "directive": null
            },
            {
              "type": "ReturnStatement",
              "start": 237,
              "end": 250,
              "argument": {
                "type": "Identifier",
                "start": 244,
                "end": 249,
                "decorators": [],
                "name": "inner",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
