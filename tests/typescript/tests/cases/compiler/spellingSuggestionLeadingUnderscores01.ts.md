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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 27,
        "end": 60,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 39,
            "end": 60,
            "definite": false,
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 48,
                        "end": 53,
                        "decorators": [],
                        "name": "__foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "10",
                            "value": 10
                          }
                        }
                      }
                    }
                  ]
                }
              }
            },
            "init": null
          }
        ],
        "declare": true,
        "kind": "let"
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 62,
      "end": 70,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 62,
        "end": 70,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 62,
          "end": 63,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 64,
          "end": 70,
          "decorators": [],
          "name": "___foo",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 92,
      "end": 127,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 99,
        "end": 127,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 103,
            "end": 127,
            "definite": false,
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 112,
                        "end": 117,
                        "decorators": [],
                        "name": "__foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 117,
                        "end": 125,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 119,
                          "end": 125
                        }
                      }
                    }
                  ]
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 129,
      "end": 153,
      "directive": null,
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
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 139,
                "end": 145,
                "decorators": [],
                "name": "___foo",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 147,
                "end": 150,
                "raw": "100",
                "value": 100
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
