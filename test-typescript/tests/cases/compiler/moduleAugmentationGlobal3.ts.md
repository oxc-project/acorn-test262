__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 17,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 17,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "A",
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
    },
    {
      "type": "EmptyStatement",
      "start": 17,
      "end": 18
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
  "start": 32,
  "end": 143,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 32,
      "end": 55,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 48,
        "end": 54,
        "raw": "\"./f1\"",
        "value": "./f1",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 40,
          "end": 41,
          "imported": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSModuleDeclaration",
      "start": 57,
      "end": 142,
      "body": {
        "type": "TSModuleBlock",
        "start": 72,
        "end": 142,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 78,
            "end": 140,
            "body": {
              "type": "TSInterfaceBody",
              "start": 97,
              "end": 140,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 107,
                  "end": 134,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 123,
                    "decorators": [],
                    "name": "getCountAsString",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 125,
                    "end": 133,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 127,
                      "end": 133
                    }
                  },
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 88,
              "end": 93,
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 93,
              "end": 96,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 94,
                  "end": 95,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 95,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 71,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "global"
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
  "end": 72,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 14,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 13,
        "raw": "\"./f2\"",
        "value": "./f2",
        "regex": null,
        "bigint": null
      },
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 27,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 24,
            "end": 27,
            "elements": [
              {
                "type": "Literal",
                "start": 25,
                "end": 26,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 72,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 71,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 34,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 37,
            "end": 71,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 37,
              "end": 69,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 37,
                "end": 57,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 37,
                  "end": 55,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 38,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 55,
                    "decorators": [],
                    "name": "getCountAsString",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 58,
                "end": 69,
                "decorators": [],
                "name": "toLowerCase",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
