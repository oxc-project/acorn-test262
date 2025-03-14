__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 40,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 40,
        "body": {
          "type": "TSInterfaceBody",
          "start": 23,
          "end": 40,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 25,
              "end": 38,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 25,
                "end": 30,
                "decorators": [],
                "name": "title",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 30,
                "end": 38,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 32,
                  "end": 38
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 22,
          "decorators": [],
          "name": "Event",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "EmptyStatement",
      "start": 40,
      "end": 41
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
  "end": 135,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 32,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 31,
        "raw": "'./event'",
        "value": "./event"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "Event",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "Event",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 33,
      "end": 83,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 80,
        "end": 83,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 47,
        "decorators": [],
        "name": "Input",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 48,
          "end": 59,
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 54,
            "end": 59,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 56,
              "end": 59
            }
          }
        },
        {
          "type": "Identifier",
          "start": 61,
          "end": 72,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 64,
            "end": 72,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 66,
              "end": 72
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 73,
        "end": 79,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 75,
          "end": 79
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 84,
      "end": 135,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 91,
        "end": 135,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 107,
          "end": 135,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 113,
              "end": 133,
              "computed": false,
              "declare": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 113,
                  "end": 119,
                  "expression": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 119,
                    "decorators": [],
                    "name": "Input",
                    "optional": false
                  }
                }
              ],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 120,
                "end": 125,
                "decorators": [],
                "name": "event",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 125,
                "end": 132,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 127,
                  "end": 132,
                  "typeName": {
                    "type": "Identifier",
                    "start": 127,
                    "end": 132,
                    "decorators": [],
                    "name": "Event",
                    "optional": false
                  }
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
          "start": 97,
          "end": 106,
          "decorators": [],
          "name": "SomeClass",
          "optional": false
        },
        "implements": [],
        "superClass": null
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
