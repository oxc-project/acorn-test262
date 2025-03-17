__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 188,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 7,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 6,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "decorators": [],
            "name": "id",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 8,
      "end": 188,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 188,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 22,
            "end": 35,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "start": 23,
              "end": 28,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 23,
                "end": 24,
                "raw": "0",
                "value": 0
              },
              "right": {
                "type": "Literal",
                "start": 27,
                "end": 28,
                "raw": "1",
                "value": 1
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 35,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 32,
                "end": 35,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 40,
            "end": 64,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "ArrowFunctionExpression",
              "start": 48,
              "end": 57,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 54,
                "end": 57,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 58,
              "end": 64,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 61,
                "end": 64,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 69,
            "end": 90,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "UnaryExpression",
              "start": 74,
              "end": 83,
              "argument": {
                "type": "Identifier",
                "start": 81,
                "end": 83,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "delete",
              "prefix": true
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 84,
              "end": 90,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 90,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 95,
            "end": 114,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "ArrayExpression",
              "start": 100,
              "end": 106,
              "elements": [
                {
                  "type": "Literal",
                  "start": 101,
                  "end": 102,
                  "raw": "0",
                  "value": 0
                },
                {
                  "type": "Literal",
                  "start": 104,
                  "end": 105,
                  "raw": "1",
                  "value": 1
                }
              ]
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 107,
              "end": 114,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 111,
                "end": 114,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 108,
                  "end": 109,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 119,
            "end": 148,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "TSTypeAssertion",
              "start": 131,
              "end": 141,
              "expression": {
                "type": "Literal",
                "start": 139,
                "end": 141,
                "raw": "\"\"",
                "value": ""
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 132,
                "end": 138,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 138,
                  "decorators": [],
                  "name": "String",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 142,
              "end": 148,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 145,
                "end": 148,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 153,
            "end": 186,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "CallExpression",
              "start": 165,
              "end": 178,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 165,
                "end": 176,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 167,
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 176,
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 179,
              "end": 186,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 183,
                "end": 186,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 180,
                  "end": 181,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 15,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
