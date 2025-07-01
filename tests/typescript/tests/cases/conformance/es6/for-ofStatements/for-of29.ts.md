__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "iterableWithOptionalIterator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 41,
                        "end": 47
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "iterator",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 48,
                        "end": 56
                      },
                      "optional": false,
                      "computed": false,
                      "start": 41,
                      "end": 56
                    },
                    "computed": true,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Iterator",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 62,
                          "end": 70
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 71,
                              "end": 77
                            }
                          ],
                          "start": 70,
                          "end": 78
                        },
                        "start": 62,
                        "end": 78
                      },
                      "start": 60,
                      "end": 78
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 40,
                    "end": 78
                  }
                ],
                "start": 34,
                "end": 80
              },
              "start": 32,
              "end": 80
            },
            "start": 4,
            "end": 80
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 80
        }
      ],
      "declare": false,
      "start": 0,
      "end": 81
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 93
            },
            "init": null,
            "definite": false,
            "start": 92,
            "end": 93
          }
        ],
        "declare": false,
        "start": 88,
        "end": 93
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "iterableWithOptionalIterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 125
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 127,
        "end": 130
      },
      "start": 83,
      "end": 130
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 130
}
```
