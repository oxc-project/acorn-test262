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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 33,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 33,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 19,
              "end": 31,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 19,
                "end": 22,
                "name": "foo",
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 200,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 62,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 72,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 75,
        "end": 121,
        "expression": {
          "type": "Literal",
          "start": 83,
          "end": 120,
          "value": "instanceOfInExternalModules_require",
          "raw": "\"instanceOfInExternalModules_require\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 123,
      "end": 199,
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 137,
        "name": "IsFoo",
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
          "start": 138,
          "end": 148,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 143,
            "end": 148,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 145,
              "end": 148
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "left": {
                "type": "Identifier",
                "start": 172,
                "end": 177,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "MemberExpression",
                "start": 189,
                "end": 196,
                "object": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 192,
                  "name": "Bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 196,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 149,
        "end": 158,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 151,
          "end": 158
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
