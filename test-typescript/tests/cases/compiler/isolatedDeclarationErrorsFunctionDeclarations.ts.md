isolatedDeclarationErrorsFunctionDeclarations.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 315,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 29,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 27,
          "end": 29,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 24,
          "decorators": [],
          "name": "noReturn",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 31,
      "end": 76,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 38,
        "end": 76,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 74,
          "end": 76,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 47,
          "end": 64,
          "decorators": [],
          "name": "noParamAnnotation",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "decorators": [],
            "name": "p",
            "optional": false
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 67,
          "end": 73,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 69,
            "end": 73
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 78,
      "end": 134,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 85,
        "end": 134,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 132,
          "end": 134,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 94,
          "end": 118,
          "decorators": [],
          "name": "noParamAnnotationDefault",
          "optional": false
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 119,
            "end": 124,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "p",
              "optional": false
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "start": 123,
              "end": 124,
              "raw": "1",
              "value": 1
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 125,
          "end": 131,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 127,
            "end": 131
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 136,
      "end": 241,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 143,
        "end": 241,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 239,
          "end": 241,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 152,
          "end": 179,
          "decorators": [],
          "name": "noParamAnnotationBadDefault",
          "optional": false
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 180,
            "end": 189,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 180,
              "end": 181,
              "decorators": [],
              "name": "p",
              "optional": false
            },
            "optional": false,
            "right": {
              "type": "BinaryExpression",
              "start": 184,
              "end": 189,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 184,
                "end": 185,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "start": 188,
                "end": 189,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "AssignmentPattern",
            "start": 191,
            "end": 208,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 191,
              "end": 193,
              "decorators": [],
              "name": "p2",
              "optional": false
            },
            "optional": false,
            "right": {
              "type": "ObjectExpression",
              "start": 196,
              "end": 208,
              "properties": [
                {
                  "type": "Property",
                  "start": 198,
                  "end": 206,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 199,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "BinaryExpression",
                    "start": 201,
                    "end": 206,
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "start": 201,
                      "end": 202,
                      "raw": "1",
                      "value": 1
                    },
                    "right": {
                      "type": "Literal",
                      "start": 205,
                      "end": 206,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "AssignmentPattern",
            "start": 210,
            "end": 231,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 210,
              "end": 212,
              "decorators": [],
              "name": "p3",
              "optional": false
            },
            "optional": false,
            "right": {
              "type": "TSAsExpression",
              "start": 215,
              "end": 231,
              "expression": {
                "type": "ArrayExpression",
                "start": 215,
                "end": 222,
                "elements": [
                  {
                    "type": "BinaryExpression",
                    "start": 216,
                    "end": 221,
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "start": 216,
                      "end": 217,
                      "raw": "1",
                      "value": 1
                    },
                    "right": {
                      "type": "Literal",
                      "start": 220,
                      "end": 221,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 226,
                "end": 231,
                "typeName": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 231,
                  "decorators": [],
                  "name": "const",
                  "optional": false
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 232,
          "end": 238,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 234,
            "end": 238
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 243,
      "end": 314,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 250,
        "end": 314,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 312,
          "end": 314,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 259,
          "end": 287,
          "decorators": [],
          "name": "noParamAnnotationBadDefault2",
          "optional": false
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 288,
            "end": 304,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 288,
              "end": 289,
              "decorators": [],
              "name": "p",
              "optional": false
            },
            "optional": false,
            "right": {
              "type": "ObjectExpression",
              "start": 292,
              "end": 304,
              "properties": [
                {
                  "type": "Property",
                  "start": 294,
                  "end": 302,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 294,
                    "end": 295,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "BinaryExpression",
                    "start": 297,
                    "end": 302,
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "start": 297,
                      "end": 298,
                      "raw": "1",
                      "value": 1
                    },
                    "right": {
                      "type": "Literal",
                      "start": 301,
                      "end": 302,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              ]
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 305,
          "end": 311,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 307,
            "end": 311
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
