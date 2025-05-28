__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 243,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 243,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 243,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 15,
            "end": 32,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 24,
              "end": 26,
              "name": "a"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 31,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 28,
                "end": 31
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          },
          {
            "type": "AccessorProperty",
            "start": 37,
            "end": 53,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 46,
              "end": 48,
              "name": "b"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 51,
              "end": 52,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          },
          {
            "type": "AccessorProperty",
            "start": 58,
            "end": 82,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 74,
              "end": 76,
              "name": "c"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 81,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 78,
                "end": 81
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          },
          {
            "type": "AccessorProperty",
            "start": 87,
            "end": 110,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 103,
              "end": 105,
              "name": "d"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 108,
              "end": 109,
              "value": 2,
              "raw": "2"
            },
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          },
          {
            "type": "MethodDefinition",
            "start": 116,
            "end": 179,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 127,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 127,
              "end": 179,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 130,
                "end": 179,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 140,
                    "end": 152,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 140,
                      "end": 151,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 140,
                        "end": 147,
                        "object": {
                          "type": "ThisExpression",
                          "start": 140,
                          "end": 144
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 145,
                          "end": 147,
                          "name": "a"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 150,
                        "end": 151,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 161,
                    "end": 173,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 161,
                      "end": 172,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 161,
                        "end": 168,
                        "object": {
                          "type": "ThisExpression",
                          "start": 161,
                          "end": 165
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 166,
                          "end": 168,
                          "name": "b"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 171,
                        "end": 172,
                        "value": 4,
                        "raw": "4"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "StaticBlock",
            "start": 185,
            "end": 241,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 202,
                "end": 214,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 202,
                  "end": 213,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 202,
                    "end": 209,
                    "object": {
                      "type": "ThisExpression",
                      "start": 202,
                      "end": 206
                    },
                    "property": {
                      "type": "PrivateIdentifier",
                      "start": 207,
                      "end": 209,
                      "name": "c"
                    },
                    "optional": false,
                    "computed": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 212,
                    "end": 213,
                    "value": 5,
                    "raw": "5"
                  }
                },
                "directive": null
              },
              {
                "type": "ExpressionStatement",
                "start": 223,
                "end": 235,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 223,
                  "end": 234,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 223,
                    "end": 230,
                    "object": {
                      "type": "ThisExpression",
                      "start": 223,
                      "end": 227
                    },
                    "property": {
                      "type": "PrivateIdentifier",
                      "start": 228,
                      "end": 230,
                      "name": "d"
                    },
                    "optional": false,
                    "computed": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 233,
                    "end": 234,
                    "value": 6,
                    "raw": "6"
                  }
                },
                "directive": null
              }
            ]
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
