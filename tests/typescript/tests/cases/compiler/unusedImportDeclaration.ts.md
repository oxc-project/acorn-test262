__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TesterB",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 13
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
              "name": "me",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 22
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
              },
              "start": 22,
              "end": 30
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 20,
            "end": 31
          }
        ],
        "start": 14,
        "end": 33
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "TesterB",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 50
      },
      "start": 34,
      "end": 51
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 52
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./unusedImportDeclaration_testerB",
          "raw": "\"./unusedImportDeclaration_testerB\"",
          "start": 19,
          "end": 54
        },
        "start": 11,
        "end": 55
      },
      "importKind": "value",
      "start": 0,
      "end": 56
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
            "name": "thingy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 69,
                  "end": 70
                },
                "typeArguments": null,
                "start": 69,
                "end": 70
              },
              "start": 67,
              "end": 70
            },
            "start": 61,
            "end": 70
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "me",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 79,
                  "end": 81
                },
                "value": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 83,
                  "end": 86
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 79,
                "end": 86
              }
            ],
            "start": 73,
            "end": 88
          },
          "definite": false,
          "start": 61,
          "end": 88
        }
      ],
      "declare": false,
      "start": 57,
      "end": 89
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 110
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 114,
              "end": 120
            },
            "start": 112,
            "end": 120
          },
          "start": 111,
          "end": 120
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 123,
          "end": 127
        },
        "start": 121,
        "end": 127
      },
      "body": null,
      "expression": false,
      "start": 90,
      "end": 128
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 129,
          "end": 132
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "IN ",
                "raw": "\"IN \"",
                "start": 133,
                "end": 138
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thingy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 147
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "me",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 150
                },
                "optional": false,
                "computed": false,
                "start": 141,
                "end": 150
              },
              "start": 133,
              "end": 150
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": "!",
              "raw": "\"!\"",
              "start": 153,
              "end": 156
            },
            "start": 133,
            "end": 156
          }
        ],
        "optional": false,
        "start": 129,
        "end": 157
      },
      "directive": null,
      "start": 129,
      "end": 158
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 158
}
```
