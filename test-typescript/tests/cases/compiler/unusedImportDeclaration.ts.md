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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "name": "TesterB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 33,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 31,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 22,
              "name": "me",
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
              "start": 22,
              "end": 30,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
              }
            },
            "accessibility": null
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
    {
      "type": "TSExportAssignment",
      "start": 34,
      "end": 51,
      "expression": {
        "type": "Identifier",
        "start": 43,
        "end": 50,
        "name": "TesterB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 88,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 70,
            "name": "thingy",
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
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 81,
                  "name": "me",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 83,
                  "end": 86,
                  "value": "A",
                  "raw": "\"A\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 111,
          "end": 120,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 112,
            "end": 120,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 114,
              "end": 120
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 121,
        "end": 127,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 123,
          "end": 127
        }
      }
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
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                  "name": "thingy",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 150,
                  "name": "me",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
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
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
