__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Style",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 10
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "StyleBase",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 22
            },
            "typeArguments": null,
            "start": 13,
            "end": 22
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "StyleArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 35
            },
            "typeArguments": null,
            "start": 25,
            "end": 35
          }
        ],
        "start": 13,
        "end": 35
      },
      "declare": false,
      "start": 0,
      "end": 36
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StyleArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 47,
        "end": 57
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 71
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Style",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 72,
                  "end": 77
                },
                "typeArguments": null,
                "start": 72,
                "end": 77
              }
            ],
            "start": 71,
            "end": 78
          },
          "start": 66,
          "end": 78
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 79,
        "end": 81
      },
      "declare": false,
      "start": 37,
      "end": 81
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StyleBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 101
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
              "start": 108,
              "end": 111
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 113,
                "end": 119
              },
              "start": 111,
              "end": 119
            },
            "accessibility": null,
            "static": false,
            "start": 108,
            "end": 120
          }
        ],
        "start": 102,
        "end": 122
      },
      "declare": false,
      "start": 82,
      "end": 122
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
            "name": "blah",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Style",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 141
                },
                "typeArguments": null,
                "start": 136,
                "end": 141
              },
              "start": 134,
              "end": 141
            },
            "start": 130,
            "end": 141
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 162,
                              "end": 165
                            },
                            "value": {
                              "type": "Literal",
                              "value": "asdf",
                              "raw": "'asdf'",
                              "start": 167,
                              "end": 173
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 162,
                            "end": 173
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "jj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 183,
                              "end": 185
                            },
                            "value": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 187,
                              "end": 188
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 183,
                            "end": 188
                          }
                        ],
                        "start": 152,
                        "end": 215
                      }
                    ],
                    "start": 151,
                    "end": 216
                  }
                ],
                "start": 150,
                "end": 217
              }
            ],
            "start": 144,
            "end": 219
          },
          "definite": false,
          "start": 130,
          "end": 219
        }
      ],
      "declare": false,
      "start": 124,
      "end": 220
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 221
}
```
