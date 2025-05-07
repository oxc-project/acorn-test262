__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 224,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 92,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 92,
        "body": {
          "type": "TSModuleBlock",
          "start": 40,
          "end": 92,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 43,
              "end": 89,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 50,
                "end": 89,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 60,
                  "end": 89,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 64,
                      "end": 86,
                      "accessibility": "public",
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "start": 71,
                        "end": 78,
                        "decorators": [],
                        "name": "address",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 78,
                        "end": 85,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 79,
                          "end": 85
                        }
                      },
                      "value": null
                    }
                  ]
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 59,
                  "decorators": [],
                  "name": "Rue",
                  "optional": false,
                  "typeAnnotation": null
                },
                "implements": [],
                "superClass": null,
                "superTypeArguments": null,
                "typeParameters": null
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "TSQualifiedName",
          "start": 14,
          "end": 39,
          "left": {
            "type": "TSQualifiedName",
            "start": 14,
            "end": 32,
            "left": {
              "type": "Identifier",
              "start": 14,
              "end": 24,
              "decorators": [],
              "name": "TypeScript",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 25,
              "end": 32,
              "decorators": [],
              "name": "Strasse",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "Identifier",
            "start": 33,
            "end": 39,
            "decorators": [],
            "name": "Street",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 139,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 101,
            "decorators": [],
            "name": "rue",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 104,
            "end": 139,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 108,
              "end": 137,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 108,
                "end": 133,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 108,
                  "end": 126,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 118,
                    "decorators": [],
                    "name": "TypeScript",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 126,
                    "decorators": [],
                    "name": "Strasse",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 133,
                  "decorators": [],
                  "name": "Street",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 134,
                "end": 137,
                "decorators": [],
                "name": "Rue",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 142,
      "end": 172,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 142,
        "end": 171,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 142,
          "end": 153,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 142,
            "end": 145,
            "decorators": [],
            "name": "rue",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 146,
            "end": 153,
            "decorators": [],
            "name": "address",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 156,
          "end": 171,
          "raw": "\"1 Main Street\"",
          "value": "1 Main Street",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 174,
      "end": 181,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 174,
        "end": 180,
        "argument": {
          "type": "Literal",
          "start": 179,
          "end": 180,
          "raw": "0",
          "value": 0,
          "regex": null,
          "bigint": null
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "IfStatement",
      "start": 183,
      "end": 224,
      "alternate": null,
      "consequent": {
        "type": "ExpressionStatement",
        "start": 204,
        "end": 224,
        "directive": null,
        "expression": {
          "type": "AssignmentExpression",
          "start": 204,
          "end": 223,
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "start": 204,
            "end": 218,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 204,
              "end": 210,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 211,
              "end": 218,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "Literal",
            "start": 221,
            "end": 223,
            "raw": "\"\"",
            "value": "",
            "regex": null,
            "bigint": null
          }
        }
      },
      "test": {
        "type": "UnaryExpression",
        "start": 187,
        "end": 202,
        "argument": {
          "type": "MemberExpression",
          "start": 188,
          "end": 202,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 188,
            "end": 194,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 195,
            "end": 202,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "!",
        "prefix": true
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
