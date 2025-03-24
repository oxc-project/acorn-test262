__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 34,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 33,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 33,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 33,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 19,
              "end": 31,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 19,
                "end": 22,
                "decorators": [],
                "name": "foo",
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
          "start": 13,
          "end": 16,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "start": 62,
  "end": 199,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 62,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 72,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 75,
        "end": 121,
        "expression": {
          "type": "Literal",
          "start": 83,
          "end": 120,
          "raw": "\"instanceOfInExternalModules_require\"",
          "value": "instanceOfInExternalModules_require"
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 123,
      "end": 199,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 159,
        "end": 199,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 165,
            "end": 197,
            "argument": {
              "type": "BinaryExpression",
              "start": 172,
              "end": 196,
              "operator": "instanceof",
              "left": {
                "type": "Identifier",
                "start": 172,
                "end": 177,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "MemberExpression",
                "start": 189,
                "end": 196,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 192,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 196,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 137,
        "decorators": [],
        "name": "IsFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 138,
          "end": 148,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 143,
            "end": 148,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 145,
              "end": 148
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 149,
        "end": 158,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 151,
          "end": 158
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
