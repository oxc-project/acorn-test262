__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 115,
        "end": 116
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 135
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 123,
            "end": 138
          }
        ],
        "start": 117,
        "end": 140
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 97,
      "end": 140
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 188,
        "end": 189
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 205
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 206,
              "end": 209
            },
            "abstract": false,
            "declare": false,
            "start": 196,
            "end": 209
          }
        ],
        "start": 190,
        "end": 211
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 170,
      "end": 211
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 97,
  "end": 212
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 47
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foobar",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 66
            },
            "typeParameters": null,
            "superClass": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 76
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 77,
                "end": 80
              },
              "optional": false,
              "computed": false,
              "start": 75,
              "end": 80
            },
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
                    "start": 91,
                    "end": 94
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 94,
                    "end": 97
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 91,
                  "end": 97
                }
              ],
              "start": 81,
              "end": 103
            },
            "abstract": false,
            "declare": false,
            "start": 54,
            "end": 103
          }
        ],
        "start": 48,
        "end": 105
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 28,
      "end": 105
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 28,
  "end": 105
}
```
