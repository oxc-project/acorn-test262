__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 33,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 33,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 31,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 22,
              "decorators": [],
              "name": "me",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 30,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
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
        "start": 6,
        "end": 13,
        "decorators": [],
        "name": "TesterB",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSExportAssignment",
      "start": 34,
      "end": 51,
      "expression": {
        "type": "Identifier",
        "start": 43,
        "end": 50,
        "decorators": [],
        "name": "TesterB",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 159,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 55,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 54,
          "raw": "\"./unusedImportDeclaration_testerB\"",
          "value": "./unusedImportDeclaration_testerB"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 89,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 88,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 70,
            "decorators": [],
            "name": "thingy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 70,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 69,
                "end": 70,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 70,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 73,
            "end": 88,
            "properties": [
              {
                "type": "Property",
                "start": 79,
                "end": 86,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 81,
                  "decorators": [],
                  "name": "me",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 83,
                  "end": 86,
                  "raw": "\"A\"",
                  "value": "A"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 90,
      "end": 128,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 110,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 111,
          "end": 120,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 112,
            "end": 120,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 114,
              "end": 120
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 121,
        "end": 127,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 123,
          "end": 127
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 129,
      "end": 158,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 129,
        "end": 157,
        "arguments": [
          {
            "type": "BinaryExpression",
            "start": 133,
            "end": 156,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 133,
              "end": 150,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 133,
                "end": 138,
                "raw": "\"IN \"",
                "value": "IN "
              },
              "right": {
                "type": "MemberExpression",
                "start": 141,
                "end": 150,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 147,
                  "decorators": [],
                  "name": "thingy",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 150,
                  "decorators": [],
                  "name": "me",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "right": {
              "type": "Literal",
              "start": 153,
              "end": 156,
              "raw": "\"!\"",
              "value": "!"
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 129,
          "end": 132,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
