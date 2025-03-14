__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 194,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
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
      "type": "VariableDeclaration",
      "start": 13,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 21,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 21,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 21,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 20,
                "end": 21,
                "typeName": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 21,
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
      "start": 23,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 36,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 32,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 32,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 30,
                "end": 32,
                "members": []
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 38,
      "end": 44,
      "expression": {
        "type": "AssignmentExpression",
        "start": 38,
        "end": 43,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 38,
          "end": 39,
          "decorators": [],
          "name": "c",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 42,
          "end": 43,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 45,
      "end": 60,
      "expression": {
        "type": "AssignmentExpression",
        "start": 45,
        "end": 60,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 45,
          "end": 46,
          "decorators": [],
          "name": "c",
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 49,
          "end": 60,
          "properties": [
            {
              "type": "Property",
              "start": 51,
              "end": 58,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 51,
                "end": 54,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 56,
                "end": 58,
                "raw": "''",
                "value": ""
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 74,
      "expression": {
        "type": "AssignmentExpression",
        "start": 61,
        "end": 74,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 61,
          "end": 62,
          "decorators": [],
          "name": "c",
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 65,
          "end": 74,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 71,
            "end": 74,
            "body": []
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": []
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 76,
      "end": 131,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 84,
        "end": 131,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 90,
            "end": 129,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 101,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 101,
              "end": 129,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 104,
                "end": 129,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 114,
                    "end": 123,
                    "argument": {
                      "type": "Literal",
                      "start": 121,
                      "end": 122,
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
        "start": 82,
        "end": 83,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 133,
      "end": 142,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 141,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 141,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 138,
              "end": 141,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 140,
                "end": 141,
                "typeName": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 141,
                  "decorators": [],
                  "name": "D",
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
      "start": 143,
      "end": 157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 147,
          "end": 156,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 147,
            "end": 152,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 148,
              "end": 152,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 150,
                "end": 152,
                "members": []
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 155,
            "end": 156,
            "decorators": [],
            "name": "d",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 158,
      "end": 164,
      "expression": {
        "type": "AssignmentExpression",
        "start": 158,
        "end": 163,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 158,
          "end": 159,
          "decorators": [],
          "name": "d",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 162,
          "end": 163,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 165,
      "end": 180,
      "expression": {
        "type": "AssignmentExpression",
        "start": 165,
        "end": 180,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 165,
          "end": 166,
          "decorators": [],
          "name": "d",
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 169,
          "end": 180,
          "properties": [
            {
              "type": "Property",
              "start": 171,
              "end": 178,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 171,
                "end": 174,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 176,
                "end": 178,
                "raw": "''",
                "value": ""
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 181,
      "end": 194,
      "expression": {
        "type": "AssignmentExpression",
        "start": 181,
        "end": 194,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 181,
          "end": 182,
          "decorators": [],
          "name": "d",
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 185,
          "end": 194,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 191,
            "end": 194,
            "body": []
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": []
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
