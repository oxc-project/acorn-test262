__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 20,
  "end": 154,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 20,
      "end": 60,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 27,
        "end": 60,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 39,
            "end": 60,
            "id": {
              "type": "Identifier",
              "start": 39,
              "end": 60,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 40,
                "end": 60,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 42,
                  "end": 60,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 48,
                      "end": 58,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 48,
                        "end": 53,
                        "decorators": [],
                        "name": "__foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 53,
                        "end": 57,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 55,
                          "end": 57,
                          "literal": {
                            "type": "Literal",
                            "start": 55,
                            "end": 57,
                            "value": 10,
                            "raw": "10"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 62,
      "end": 70,
      "expression": {
        "type": "MemberExpression",
        "start": 62,
        "end": 70,
        "object": {
          "type": "Identifier",
          "start": 62,
          "end": 63,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 64,
          "end": 70,
          "decorators": [],
          "name": "___foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 92,
      "end": 127,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 99,
        "end": 127,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 103,
            "end": 127,
            "id": {
              "type": "Identifier",
              "start": 103,
              "end": 127,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 104,
                "end": 127,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 106,
                  "end": 127,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 112,
                      "end": 125,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 112,
                        "end": 117,
                        "decorators": [],
                        "name": "__foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 117,
                        "end": 125,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 119,
                          "end": 125
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 129,
      "end": 153,
      "expression": {
        "type": "AssignmentExpression",
        "start": 129,
        "end": 153,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 129,
          "end": 130,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 133,
          "end": 153,
          "properties": [
            {
              "type": "Property",
              "start": 139,
              "end": 150,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 139,
                "end": 145,
                "decorators": [],
                "name": "___foo",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 147,
                "end": 150,
                "value": 100,
                "raw": "100"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
