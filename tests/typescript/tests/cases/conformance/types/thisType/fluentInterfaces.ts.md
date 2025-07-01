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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 21
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 25,
                "end": 29
              },
              "start": 23,
              "end": 29
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 18,
            "end": 30
          }
        ],
        "start": 12,
        "end": 32
      },
      "declare": false,
      "start": 0,
      "end": 32
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 44
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 54
          },
          "typeArguments": null,
          "start": 53,
          "end": 54
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 64
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 68,
                "end": 72
              },
              "start": 66,
              "end": 72
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 61,
            "end": 73
          }
        ],
        "start": 55,
        "end": 75
      },
      "declare": false,
      "start": 33,
      "end": 75
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 87
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 97
          },
          "typeArguments": null,
          "start": 96,
          "end": 97
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 107
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 111,
                "end": 115
              },
              "start": 109,
              "end": 115
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 104,
            "end": 116
          }
        ],
        "start": 98,
        "end": 118
      },
      "declare": false,
      "start": 76,
      "end": 118
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 126,
                  "end": 127
                },
                "typeArguments": null,
                "start": 126,
                "end": 127
              },
              "start": 124,
              "end": 127
            },
            "start": 123,
            "end": 127
          },
          "init": null,
          "definite": false,
          "start": 123,
          "end": 127
        }
      ],
      "declare": false,
      "start": 119,
      "end": 128
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 133,
            "end": 134
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 137,
                        "end": 138
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 139,
                        "end": 142
                      },
                      "optional": false,
                      "computed": false,
                      "start": 137,
                      "end": 142
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 137,
                    "end": 144
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 145,
                    "end": 148
                  },
                  "optional": false,
                  "computed": false,
                  "start": 137,
                  "end": 148
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 137,
                "end": 150
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null,
                "start": 151,
                "end": 154
              },
              "optional": false,
              "computed": false,
              "start": 137,
              "end": 154
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 137,
            "end": 156
          },
          "definite": false,
          "start": 133,
          "end": 156
        }
      ],
      "declare": false,
      "start": 129,
      "end": 157
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 176
}
```
