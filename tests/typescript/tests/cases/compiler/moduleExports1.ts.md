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
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 60,
                  "end": 89,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 64,
                      "end": 86,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 71,
                        "end": 78,
                        "decorators": [],
                        "name": "address",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
                      "value": null,
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": "public"
                    }
                  ]
                },
                "abstract": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 140,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 139,
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
                    "decorators": [],
                    "name": "TypeScript",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 126,
                    "decorators": [],
                    "name": "Strasse",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 133,
                  "decorators": [],
                  "name": "Street",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 134,
                "end": 137,
                "decorators": [],
                "name": "Rue",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "rue",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 146,
            "end": 153,
            "decorators": [],
            "name": "address",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
        "argument": {
          "type": "Literal",
          "start": 179,
          "end": 180,
          "value": 0,
          "raw": "0"
        },
        "prefix": true
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
        "argument": {
          "type": "MemberExpression",
          "start": 188,
          "end": 202,
          "object": {
            "type": "Identifier",
            "start": 188,
            "end": 194,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 195,
            "end": 202,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
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
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 211,
              "end": 218,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
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
  "sourceType": "module",
  "hashbang": null
}
```
