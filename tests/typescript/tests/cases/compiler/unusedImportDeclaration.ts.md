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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 33,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 31,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 22,
              "decorators": [],
              "name": "me",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
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
  "end": 158,
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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 55,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 54,
          "value": "./unusedImportDeclaration_testerB",
          "raw": "\"./unusedImportDeclaration_testerB\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 89,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 88,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 70,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 81,
                  "decorators": [],
                  "name": "me",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 83,
                  "end": 86,
                  "value": "A",
                  "raw": "\"A\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 90,
      "end": 128,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 110,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 129,
      "end": 158,
      "expression": {
        "type": "CallExpression",
        "start": 129,
        "end": 157,
        "callee": {
          "type": "Identifier",
          "start": 129,
          "end": 132,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "BinaryExpression",
            "start": 133,
            "end": 156,
            "left": {
              "type": "BinaryExpression",
              "start": 133,
              "end": 150,
              "left": {
                "type": "Literal",
                "start": 133,
                "end": 138,
                "value": "IN ",
                "raw": "\"IN \""
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "start": 141,
                "end": 150,
                "object": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 147,
                  "decorators": [],
                  "name": "thingy",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 150,
                  "decorators": [],
                  "name": "me",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 153,
              "end": 156,
              "value": "!",
              "raw": "\"!\""
            }
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
