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
        "name": "Employee",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 14
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_fullName",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 38
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 40,
                "end": 46
              },
              "start": 38,
              "end": 46
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 21,
            "end": 47
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fullName",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 73
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 77,
                  "end": 83
                },
                "start": 75,
                "end": 83
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 101,
                        "end": 105
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_fullName",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 106,
                        "end": 115
                      },
                      "optional": false,
                      "computed": false,
                      "start": 101,
                      "end": 115
                    },
                    "start": 94,
                    "end": 116
                  }
                ],
                "start": 84,
                "end": 122
              },
              "expression": false,
              "start": 73,
              "end": 122
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 53,
            "end": 122
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fullName",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 188
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 192,
                      "end": 198
                    },
                    "start": 190,
                    "end": 198
                  },
                  "start": 189,
                  "end": 198
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 200,
                "end": 202
              },
              "expression": false,
              "start": 188,
              "end": 202
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 168,
            "end": 202
          }
        ],
        "start": 15,
        "end": 204
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 204
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 204
}
```
