__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
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
              "type": "TSAnyKeyword",
              "start": 24,
              "end": 27
            },
            "start": 22,
            "end": 27
          },
          "start": 21,
          "end": 27
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TopLevelConstEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 41,
        "end": 58
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 62
            },
            "initializer": null,
            "computed": false,
            "start": 61,
            "end": 62
          }
        ],
        "start": 59,
        "end": 64
      },
      "const": true,
      "declare": false,
      "start": 30,
      "end": 64
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 82,
          "end": 85
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "use",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 94,
                  "end": 97
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TopLevelConstEnum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 98,
                      "end": 115
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 116,
                      "end": 117
                    },
                    "optional": false,
                    "computed": false,
                    "start": 98,
                    "end": 117
                  }
                ],
                "optional": false,
                "start": 94,
                "end": 118
              },
              "directive": null,
              "start": 94,
              "end": 119
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "use",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 124,
                  "end": 127
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 128,
                        "end": 129
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NonTopLevelConstEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 130,
                        "end": 150
                      },
                      "optional": false,
                      "computed": false,
                      "start": 128,
                      "end": 150
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 151,
                      "end": 152
                    },
                    "optional": false,
                    "computed": false,
                    "start": 128,
                    "end": 152
                  }
                ],
                "optional": false,
                "start": 124,
                "end": 153
              },
              "directive": null,
              "start": 124,
              "end": 154
            }
          ],
          "start": 88,
          "end": 156
        },
        "expression": false,
        "start": 73,
        "end": 156
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 66,
      "end": 156
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 168,
        "end": 169
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "NonTopLevelConstEnum",
                "optional": false,
                "typeAnnotation": null,
                "start": 194,
                "end": 214
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 217,
                      "end": 218
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 217,
                    "end": 218
                  }
                ],
                "start": 215,
                "end": 220
              },
              "const": true,
              "declare": false,
              "start": 183,
              "end": 220
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 176,
            "end": 220
          }
        ],
        "start": 170,
        "end": 222
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 158,
      "end": 222
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 222
}
```
