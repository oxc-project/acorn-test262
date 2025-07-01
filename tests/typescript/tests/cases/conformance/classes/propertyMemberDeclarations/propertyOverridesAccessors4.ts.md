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
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 20
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
              "name": "sound",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 36
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
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
                  "start": 40,
                  "end": 46
                },
                "start": 38,
                "end": 46
              },
              "body": null,
              "expression": false,
              "start": 36,
              "end": 46
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 27,
            "end": 46
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sound",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 60
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 66,
                      "end": 72
                    },
                    "start": 64,
                    "end": 72
                  },
                  "start": 61,
                  "end": 72
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 60,
              "end": 73
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 51,
            "end": 73
          }
        ],
        "start": 21,
        "end": 75
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 75
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Lion",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 86
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 101
      },
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
              "name": "sound",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 113
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "RAWR!",
              "raw": "'RAWR!'",
              "start": 116,
              "end": 123
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 108,
            "end": 123
          }
        ],
        "start": 102,
        "end": 139
      },
      "abstract": false,
      "declare": false,
      "start": 76,
      "end": 139
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 139
}
```
