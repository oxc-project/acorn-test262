__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 145,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 40,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 40,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 25,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 25,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 19,
                "end": 25
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 30,
            "end": 38,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 33,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 33,
              "end": 38,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 36,
                "end": 38,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 41,
      "end": 89,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 72,
        "end": 89,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 78,
            "end": 87,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 81,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 81,
              "end": 87,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 84,
                "end": 87,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 48,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 70,
          "end": 71,
          "expression": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "decorators": [],
            "name": "C",
            "optional": false
          }
        }
      ],
      "superClass": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 91,
      "end": 100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 95,
          "end": 99,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 99,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 99,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 98,
                "end": 99,
                "typeName": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 99,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 119,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 109,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 109,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 108,
                "end": 109,
                "typeName": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 109,
                  "decorators": [],
                  "name": "D",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 112,
            "end": 119,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "D",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 121,
      "end": 129,
      "expression": {
        "type": "CallExpression",
        "start": 121,
        "end": 128,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 121,
          "end": 126,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 121,
            "end": 122,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 123,
            "end": 126,
            "decorators": [],
            "name": "bar",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 138,
      "expression": {
        "type": "CallExpression",
        "start": 130,
        "end": 137,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 130,
          "end": 135,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 130,
            "end": 131,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 132,
            "end": 135,
            "decorators": [],
            "name": "baz",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 139,
      "end": 145,
      "expression": {
        "type": "MemberExpression",
        "start": 139,
        "end": 144,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 139,
          "end": 140,
          "decorators": [],
          "name": "d",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 141,
          "end": 144,
          "decorators": [],
          "name": "foo",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
