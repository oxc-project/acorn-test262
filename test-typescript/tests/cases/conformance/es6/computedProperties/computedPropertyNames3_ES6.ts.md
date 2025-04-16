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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "name": "id",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 8,
      "end": 188,
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 15,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 188,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 22,
            "end": 35,
            "static": false,
            "computed": true,
            "key": {
              "type": "BinaryExpression",
              "start": 23,
              "end": 28,
              "left": {
                "type": "Literal",
                "start": 23,
                "end": 24,
                "value": 0,
                "raw": "0"
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 27,
                "end": 28,
                "value": 1,
                "raw": "1"
              }
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 35,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 32,
                "end": 35,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 40,
            "end": 64,
            "static": true,
            "computed": true,
            "key": {
              "type": "ArrowFunctionExpression",
              "start": 48,
              "end": 57,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 54,
                "end": 57,
                "body": []
              },
              "typeParameters": null,
              "returnType": null
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 58,
              "end": 64,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 61,
                "end": 64,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 69,
            "end": 90,
            "static": false,
            "computed": true,
            "key": {
              "type": "UnaryExpression",
              "start": 74,
              "end": 83,
              "operator": "delete",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 81,
                "end": 83,
                "name": "id",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 84,
              "end": 90,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 90,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 95,
            "end": 114,
            "static": false,
            "computed": true,
            "key": {
              "type": "ArrayExpression",
              "start": 100,
              "end": 106,
              "elements": [
                {
                  "type": "Literal",
                  "start": 101,
                  "end": 102,
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Literal",
                  "start": 104,
                  "end": 105,
                  "value": 1,
                  "raw": "1"
                }
              ]
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 107,
              "end": 114,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 108,
                  "end": 109,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 111,
                "end": 114,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 119,
            "end": 148,
            "static": true,
            "computed": true,
            "key": {
              "type": "TSTypeAssertion",
              "start": 131,
              "end": 141,
              "expression": {
                "type": "Literal",
                "start": 139,
                "end": 141,
                "value": "",
                "raw": "\"\""
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 132,
                "end": 138,
                "typeName": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 138,
                  "name": "String",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 142,
              "end": 148,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 145,
                "end": 148,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 153,
            "end": 186,
            "static": true,
            "computed": true,
            "key": {
              "type": "CallExpression",
              "start": 165,
              "end": 178,
              "callee": {
                "type": "MemberExpression",
                "start": 165,
                "end": 176,
                "object": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 167,
                  "name": "id",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 176,
                  "name": "toString",
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
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 179,
              "end": 186,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 180,
                  "end": 181,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 183,
                "end": 186,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
