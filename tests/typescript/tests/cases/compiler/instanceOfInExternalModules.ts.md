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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 33,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 19,
              "end": 31,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 19,
                "end": 22,
                "decorators": [],
                "name": "foo",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
        "decorators": [],
        "name": "IsFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
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
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 196,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
