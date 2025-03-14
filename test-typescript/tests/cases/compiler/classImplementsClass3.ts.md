__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 175,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 39,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 39,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 10,
            "end": 37,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 13,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 13,
              "end": 37,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 24,
                "end": 37,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 26,
                    "end": 35,
                    "argument": {
                      "type": "Literal",
                      "start": 33,
                      "end": 34,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 15,
                "end": 23,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 17,
                  "end": 23
                }
              }
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
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 40,
      "end": 100,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 61,
        "end": 100,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 67,
            "end": 98,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 70,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 70,
              "end": 98,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 73,
                "end": 98,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 83,
                    "end": 92,
                    "argument": {
                      "type": "Literal",
                      "start": 90,
                      "end": 91,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
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
        "start": 46,
        "end": 47,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 59,
          "end": 60,
          "expression": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 102,
      "end": 123,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 121,
        "end": 123,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 110,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 119,
        "end": 120,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 146,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 146,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 146,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 145,
                "end": 146,
                "typeName": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 146,
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
      "start": 148,
      "end": 159,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 158,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 158,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 158,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 156,
                "end": 158,
                "typeName": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 158,
                  "decorators": [],
                  "name": "C2",
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
      "type": "ExpressionStatement",
      "start": 160,
      "end": 167,
      "expression": {
        "type": "AssignmentExpression",
        "start": 160,
        "end": 166,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 160,
          "end": 161,
          "decorators": [],
          "name": "c",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 164,
          "end": 166,
          "decorators": [],
          "name": "c2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 168,
      "end": 175,
      "expression": {
        "type": "AssignmentExpression",
        "start": 168,
        "end": 174,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 168,
          "end": 170,
          "decorators": [],
          "name": "c2",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 173,
          "end": 174,
          "decorators": [],
          "name": "c",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
