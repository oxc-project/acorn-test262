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
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 40,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 22,
          "decorators": [],
          "name": "Event",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
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
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 25,
                "end": 30,
                "decorators": [],
                "name": "title",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 30,
                "end": 38,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 32,
                  "end": 38
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
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
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "Event",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 31,
        "value": "./event",
        "raw": "'./event'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 33,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 47,
        "decorators": [],
        "name": "Input",
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
      },
      "body": {
        "type": "BlockStatement",
        "start": 80,
        "end": 83,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 84,
      "end": 135,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 91,
        "end": 135,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 97,
          "end": 106,
          "decorators": [],
          "name": "SomeClass",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 107,
          "end": 135,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 113,
              "end": 133,
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
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "key": {
                "type": "Identifier",
                "start": 120,
                "end": 125,
                "decorators": [],
                "name": "event",
                "optional": false,
                "typeAnnotation": null
              },
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
