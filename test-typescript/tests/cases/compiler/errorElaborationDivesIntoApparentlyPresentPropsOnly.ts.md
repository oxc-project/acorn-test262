__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 225,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 83,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 44,
        "end": 83,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 50,
            "end": 81,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 50,
              "end": 80,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 50,
                "end": 51,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ObjectExpression",
                "start": 54,
                "end": 80,
                "properties": [
                  {
                    "type": "Property",
                    "start": 56,
                    "end": 64,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 57,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 59,
                      "end": 64,
                      "raw": "\"abc\"",
                      "value": "abc",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 66,
                    "end": 71,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 66,
                      "end": 67,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 69,
                      "end": 71,
                      "raw": "20",
                      "value": 20,
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 73,
                    "end": 78,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 74,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 76,
                      "end": 78,
                      "raw": "30",
                      "value": 30,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 38,
          "end": 42,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 39,
            "end": 42,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 41,
              "end": 42,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 37,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 36,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 23,
              "end": 36,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 25,
                  "end": 34,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 26,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 26,
                    "end": 34,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 28,
                      "end": 34
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 85,
      "end": 151,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 129,
        "end": 151,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 135,
            "end": 149,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 135,
              "end": 148,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 135,
                "end": 136,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ObjectExpression",
                "start": 139,
                "end": 148,
                "properties": [
                  {
                    "type": "Property",
                    "start": 141,
                    "end": 146,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 141,
                      "end": 142,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 144,
                      "end": 146,
                      "raw": "20",
                      "value": 20,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 97,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 123,
          "end": 127,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 124,
            "end": 127,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 126,
              "end": 127,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 126,
                "end": 127,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 97,
        "end": 122,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 98,
            "end": 121,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 108,
              "end": 121,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 110,
                  "end": 119,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 110,
                    "end": 111,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 111,
                    "end": 119,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 113,
                      "end": 119
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 153,
      "end": 225,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 197,
        "end": 225,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 203,
            "end": 223,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 203,
              "end": 222,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 203,
                "end": 204,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ObjectExpression",
                "start": 207,
                "end": 222,
                "properties": [
                  {
                    "type": "Property",
                    "start": 209,
                    "end": 220,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 209,
                      "end": 210,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 212,
                      "end": 220,
                      "raw": "\"not ok\"",
                      "value": "not ok",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 165,
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 191,
          "end": 195,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 192,
            "end": 195,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 194,
              "end": 195,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 194,
                "end": 195,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 165,
        "end": 190,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 166,
            "end": 189,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 176,
              "end": 189,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 178,
                  "end": 187,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 178,
                    "end": 179,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 179,
                    "end": 187,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 181,
                      "end": 187
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 166,
              "end": 167,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
