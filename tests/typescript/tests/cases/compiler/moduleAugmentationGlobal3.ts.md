__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 15,
          "end": 17
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 17
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 17
    },
    {
      "type": "EmptyStatement",
      "start": 17,
      "end": 18
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 18
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "importKind": "value",
          "start": 40,
          "end": 41
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./f1",
        "raw": "\"./f1\"",
        "start": 48,
        "end": 54
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 32,
      "end": 55
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 71
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 93
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 95
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 94,
                  "end": 95
                }
              ],
              "start": 93,
              "end": 96
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getCountAsString",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 107,
                    "end": 123
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 127,
                      "end": 133
                    },
                    "start": 125,
                    "end": 133
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 107,
                  "end": 134
                }
              ],
              "start": 97,
              "end": 140
            },
            "declare": false,
            "start": 78,
            "end": 140
          }
        ],
        "start": 72,
        "end": 142
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 57,
      "end": 142
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 32,
  "end": 143
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./f2",
        "raw": "\"./f2\"",
        "start": 7,
        "end": 13
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 14
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 21
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 25,
                "end": 26
              }
            ],
            "start": 24,
            "end": 27
          },
          "definite": false,
          "start": 20,
          "end": 27
        }
      ],
      "declare": false,
      "start": 16,
      "end": 28
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 34
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 37,
                    "end": 38
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getCountAsString",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 39,
                    "end": 55
                  },
                  "optional": false,
                  "computed": false,
                  "start": 37,
                  "end": 55
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 37,
                "end": 57
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toLowerCase",
                "optional": false,
                "typeAnnotation": null,
                "start": 58,
                "end": 69
              },
              "optional": false,
              "computed": false,
              "start": 37,
              "end": 69
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 37,
            "end": 71
          },
          "definite": false,
          "start": 33,
          "end": 71
        }
      ],
      "declare": false,
      "start": 29,
      "end": 72
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 72
}
```
