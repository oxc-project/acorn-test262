constructorDefaultValuesReferencingThis.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 249,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 66,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 66,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 34,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 29,
              "decorators": [],
              "name": "baseProp",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 32,
              "end": 33,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "MethodDefinition",
            "start": 39,
            "end": 64,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 50,
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
              "start": 50,
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
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 51,
                  "end": 59,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 52,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "ThisExpression",
                    "start": 55,
                    "end": 59
                  }
                }
              ]
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
      "start": 68,
      "end": 112,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 79,
        "end": 112,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 85,
            "end": 110,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 85,
              "end": 96,
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
              "start": 96,
              "end": 110,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 107,
                "end": 110,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 97,
                  "end": 105,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 98,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "ThisExpression",
                    "start": 101,
                    "end": 105
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 75,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 75,
        "end": 78,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 76,
            "end": 77,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 114,
      "end": 165,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 125,
        "end": 165,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 131,
            "end": 163,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 131,
              "end": 142,
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
              "start": 142,
              "end": 163,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 160,
                "end": 163,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 143,
                  "end": 158,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "AssignmentPattern",
                    "start": 150,
                    "end": 158,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 150,
                      "end": 151,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "right": {
                      "type": "ThisExpression",
                      "start": 154,
                      "end": 158
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 121,
        "decorators": [],
        "name": "E",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 121,
        "end": 124,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 122,
            "end": 123,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 167,
      "end": 248,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 185,
        "end": 248,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 191,
            "end": 246,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 191,
              "end": 202,
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
              "start": 202,
              "end": 246,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 222,
                "end": 246,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 232,
                    "end": 240,
                    "expression": {
                      "type": "CallExpression",
                      "start": 232,
                      "end": 239,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 232,
                        "end": 237
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 203,
                  "end": 220,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 203,
                    "end": 204,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "MemberExpression",
                    "start": 207,
                    "end": 220,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 207,
                      "end": 211
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 212,
                      "end": 220,
                      "decorators": [],
                      "name": "baseProp",
                      "optional": false
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 173,
        "end": 174,
        "decorators": [],
        "name": "F",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 183,
        "end": 184,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
