__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "__foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 48,
                        "end": 53
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 55,
                            "end": 57
                          },
                          "start": 55,
                          "end": 57
                        },
                        "start": 53,
                        "end": 57
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 48,
                      "end": 58
                    }
                  ],
                  "start": 42,
                  "end": 60
                },
                "start": 40,
                "end": 60
              },
              "start": 39,
              "end": 60
            },
            "init": null,
            "definite": false,
            "start": 39,
            "end": 60
          }
        ],
        "declare": true,
        "start": 27,
        "end": 60
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 20,
      "end": 60
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 62,
          "end": 63
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "___foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 64,
          "end": 70
        },
        "optional": false,
        "computed": false,
        "start": 62,
        "end": 70
      },
      "directive": null,
      "start": 62,
      "end": 70
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "__foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 112,
                        "end": 117
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 119,
                          "end": 125
                        },
                        "start": 117,
                        "end": 125
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 112,
                      "end": 125
                    }
                  ],
                  "start": 106,
                  "end": 127
                },
                "start": 104,
                "end": 127
              },
              "start": 103,
              "end": 127
            },
            "init": null,
            "definite": false,
            "start": 103,
            "end": 127
          }
        ],
        "declare": false,
        "start": 99,
        "end": 127
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 92,
      "end": 127
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 129,
          "end": 130
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "___foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 145
              },
              "value": {
                "type": "Literal",
                "value": 100,
                "raw": "100",
                "start": 147,
                "end": 150
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 139,
              "end": 150
            }
          ],
          "start": 133,
          "end": 153
        },
        "start": 129,
        "end": 153
      },
      "directive": null,
      "start": 129,
      "end": 153
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 20,
  "end": 154
}
```
