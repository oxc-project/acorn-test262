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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 6,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "decorators": [],
            "name": "id",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 8,
      "end": 188,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 188,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 22,
            "end": 35,
            "decorators": [],
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
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 35,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 32,
                "end": 35,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 40,
            "end": 64,
            "decorators": [],
            "key": {
              "type": "ArrowFunctionExpression",
              "start": 48,
              "end": 57,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 54,
                "end": 57,
                "body": []
              },
              "id": null,
              "generator": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 58,
              "end": 64,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 61,
                "end": 64,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 69,
            "end": 90,
            "decorators": [],
            "key": {
              "type": "UnaryExpression",
              "start": 74,
              "end": 83,
              "operator": "delete",
              "argument": {
                "type": "Identifier",
                "start": 81,
                "end": 83,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "value": {
              "type": "FunctionExpression",
              "start": 84,
              "end": 90,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 90,
                "body": []
              },
              "expression": false
            },
            "kind": "get",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 95,
            "end": 114,
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
            "value": {
              "type": "FunctionExpression",
              "start": 107,
              "end": 114,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 111,
                "end": 114,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 119,
            "end": 148,
            "decorators": [],
            "key": {
              "type": "TSTypeAssertion",
              "start": 131,
              "end": 141,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 132,
                "end": 138,
                "typeName": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 138,
                  "decorators": [],
                  "name": "String",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "expression": {
                "type": "Literal",
                "start": 139,
                "end": 141,
                "value": "",
                "raw": "\"\""
              }
            },
            "value": {
              "type": "FunctionExpression",
              "start": 142,
              "end": 148,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 145,
                "end": 148,
                "body": []
              },
              "expression": false
            },
            "kind": "get",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 153,
            "end": 186,
            "decorators": [],
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
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 176,
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 179,
              "end": 186,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 183,
                "end": 186,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
