__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 23
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 25,
                "end": 31
              },
              "start": 23,
              "end": 31
            },
            "accessibility": null,
            "static": false,
            "start": 20,
            "end": 31
          }
        ],
        "start": 14,
        "end": 33
      },
      "declare": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NS",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 47
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 71,
                "end": 74
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 85,
                      "end": 88
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 90,
                          "end": 93
                        },
                        "typeArguments": null,
                        "start": 90,
                        "end": 93
                      },
                      "start": 88,
                      "end": 93
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 85,
                    "end": 93
                  }
                ],
                "start": 75,
                "end": 99
              },
              "declare": false,
              "start": 61,
              "end": 99
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 54,
            "end": 99
          }
        ],
        "start": 48,
        "end": 101
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 35,
      "end": 101
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 133
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 136,
            "end": 138
          },
          "definite": false,
          "start": 132,
          "end": 138
        }
      ],
      "declare": false,
      "start": 126,
      "end": 138
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 173,
            "end": 174
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 177,
            "end": 179
          },
          "definite": false,
          "start": 173,
          "end": 179
        }
      ],
      "declare": false,
      "start": 167,
      "end": 179
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 206
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 209,
            "end": 211
          },
          "definite": false,
          "start": 205,
          "end": 211
        }
      ],
      "declare": false,
      "start": 199,
      "end": 211
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 211
}
```
