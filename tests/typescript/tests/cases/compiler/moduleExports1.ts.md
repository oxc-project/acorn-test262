__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "TSQualifiedName",
          "left": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeScript",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 24
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Strasse",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 32
            },
            "start": 14,
            "end": 32
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Street",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 39
          },
          "start": 14,
          "end": 39
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Rue",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 59
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "address",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 71,
                        "end": 78
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 79,
                          "end": 85
                        },
                        "start": 78,
                        "end": 85
                      },
                      "value": null,
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": "public",
                      "start": 64,
                      "end": 86
                    }
                  ],
                  "start": 60,
                  "end": 89
                },
                "abstract": false,
                "declare": false,
                "start": 50,
                "end": 89
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 43,
              "end": 89
            }
          ],
          "start": 40,
          "end": 92
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 92
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 92
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "rue",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 101
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TypeScript",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 108,
                    "end": 118
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Strasse",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 119,
                    "end": 126
                  },
                  "optional": false,
                  "computed": false,
                  "start": 108,
                  "end": 126
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Street",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 127,
                  "end": 133
                },
                "optional": false,
                "computed": false,
                "start": 108,
                "end": 133
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Rue",
                "optional": false,
                "typeAnnotation": null,
                "start": 134,
                "end": 137
              },
              "optional": false,
              "computed": false,
              "start": 108,
              "end": 137
            },
            "typeArguments": null,
            "arguments": [],
            "start": 104,
            "end": 139
          },
          "definite": false,
          "start": 98,
          "end": 139
        }
      ],
      "declare": false,
      "start": 94,
      "end": 140
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "rue",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 145
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "address",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 153
          },
          "optional": false,
          "computed": false,
          "start": 142,
          "end": 153
        },
        "right": {
          "type": "Literal",
          "value": "1 Main Street",
          "raw": "\"1 Main Street\"",
          "start": 156,
          "end": 171
        },
        "start": 142,
        "end": 171
      },
      "directive": null,
      "start": 142,
      "end": 172
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 179,
          "end": 180
        },
        "prefix": true,
        "start": 174,
        "end": 180
      },
      "directive": null,
      "start": 174,
      "end": 181
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 194
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 195,
            "end": 202
          },
          "optional": false,
          "computed": false,
          "start": 188,
          "end": 202
        },
        "prefix": true,
        "start": 187,
        "end": 202
      },
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 210
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 218
            },
            "optional": false,
            "computed": false,
            "start": 204,
            "end": 218
          },
          "right": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 221,
            "end": 223
          },
          "start": 204,
          "end": 223
        },
        "directive": null,
        "start": 204,
        "end": 224
      },
      "alternate": null,
      "start": 183,
      "end": 224
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 224
}
```
