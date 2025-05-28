__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 97,
  "end": 206,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 97,
      "end": 137,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 114,
        "end": 137,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 120,
            "end": 135,
            "id": {
              "type": "Identifier",
              "start": 129,
              "end": 132,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": null,
            "expression": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 167,
      "end": 205,
      "id": {
        "type": "Identifier",
        "start": 182,
        "end": 183,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 184,
        "end": 205,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 190,
            "end": 203,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 196,
              "end": 199,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 200,
              "end": 203,
              "body": []
            },
            "abstract": false,
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
  "start": 28,
  "end": 102,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 28,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 45,
        "end": 102,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 51,
            "end": 100,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 57,
              "end": 63,
              "decorators": [],
              "name": "foobar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "MemberExpression",
              "start": 72,
              "end": 77,
              "object": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 74,
                "end": 77,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 78,
              "end": 100,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 88,
                  "end": 94,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 91,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 91,
                    "end": 94,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": null,
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
