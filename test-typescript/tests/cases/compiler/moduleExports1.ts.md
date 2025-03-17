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
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 92,
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
              "name": "TypeScript",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 25,
              "end": 32,
              "name": "Strasse",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "right": {
            "type": "Identifier",
            "start": 33,
            "end": 39,
            "name": "Street",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 40,
          "end": 92,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 43,
              "end": 89,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 50,
                "end": 89,
                "id": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 59,
                  "name": "Rue",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 60,
                  "end": 89,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 64,
                      "end": 86,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 71,
                        "end": 78,
                        "name": "address",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": null,
                      "decorators": [],
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
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
                      "accessibility": "public"
                    }
                  ]
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 101,
            "name": "rue",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 104,
            "end": 139,
            "callee": {
              "type": "MemberExpression",
              "start": 108,
              "end": 137,
              "object": {
                "type": "MemberExpression",
                "start": 108,
                "end": 133,
                "object": {
                  "type": "MemberExpression",
                  "start": 108,
                  "end": 126,
                  "object": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 118,
                    "name": "TypeScript",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 126,
                    "name": "Strasse",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 133,
                  "name": "Street",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 134,
                "end": 137,
                "name": "Rue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 142,
      "end": 172,
      "expression": {
        "type": "AssignmentExpression",
        "start": 142,
        "end": 171,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 142,
          "end": 153,
          "object": {
            "type": "Identifier",
            "start": 142,
            "end": 145,
            "name": "rue",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 146,
            "end": 153,
            "name": "address",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 156,
          "end": 171,
          "value": "1 Main Street",
          "raw": "\"1 Main Street\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 174,
      "end": 181,
      "expression": {
        "type": "UnaryExpression",
        "start": 174,
        "end": 180,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "Literal",
          "start": 179,
          "end": 180,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "IfStatement",
      "start": 183,
      "end": 224,
      "test": {
        "type": "UnaryExpression",
        "start": 187,
        "end": 202,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 188,
          "end": 202,
          "object": {
            "type": "Identifier",
            "start": 188,
            "end": 194,
            "name": "module",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 195,
            "end": 202,
            "name": "exports",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "consequent": {
        "type": "ExpressionStatement",
        "start": 204,
        "end": 224,
        "expression": {
          "type": "AssignmentExpression",
          "start": 204,
          "end": 223,
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "start": 204,
            "end": 218,
            "object": {
              "type": "Identifier",
              "start": 204,
              "end": 210,
              "name": "module",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 211,
              "end": 218,
              "name": "exports",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 221,
            "end": 223,
            "value": "",
            "raw": "\"\""
          }
        },
        "directive": null
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
