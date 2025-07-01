__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 15
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 18,
                "end": 21
              },
              "expression": false,
              "start": 15,
              "end": 21
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 12,
            "end": 21
          }
        ],
        "start": 10,
        "end": 23
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 23
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 41,
                            "end": 47
                          },
                          "start": 39,
                          "end": 47
                        },
                        "start": 34,
                        "end": 47
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 50,
                        "end": 56
                      },
                      "start": 48,
                      "end": 56
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 33,
                    "end": 57
                  }
                ],
                "start": 31,
                "end": 59
              },
              "start": 29,
              "end": 59
            },
            "start": 28,
            "end": 59
          },
          "init": null,
          "definite": false,
          "start": 28,
          "end": 59
        }
      ],
      "declare": false,
      "start": 24,
      "end": 60
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
            "name": "result",
            "optional": false,
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
                  "start": 73,
                  "end": 76
                },
                "typeArguments": null,
                "start": 73,
                "end": 76
              },
              "start": 71,
              "end": 76
            },
            "start": 65,
            "end": 76
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 80
            },
            "property": {
              "type": "Literal",
              "value": "one",
              "raw": "\"one\"",
              "start": 81,
              "end": 86
            },
            "optional": false,
            "computed": true,
            "start": 79,
            "end": 87
          },
          "definite": false,
          "start": 65,
          "end": 87
        }
      ],
      "declare": false,
      "start": 61,
      "end": 88
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 97
}
```
