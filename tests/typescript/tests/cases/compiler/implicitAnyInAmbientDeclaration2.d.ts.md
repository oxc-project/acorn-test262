__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 21,
          "end": 22
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 0,
      "end": 24
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
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 68
          },
          "init": null,
          "definite": false,
          "start": 65,
          "end": 68
        }
      ],
      "declare": true,
      "start": 53,
      "end": 69
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 114,
        "end": 115
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
              "name": "publicMember",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 141
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 122,
            "end": 142
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateMember",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 196
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 175,
            "end": 197
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 242,
              "end": 256
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 258
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 256,
              "end": 260
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 235,
            "end": 260
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 316
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
                  "name": "privateParam",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 317,
                  "end": 329
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 316,
              "end": 331
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 293,
            "end": 331
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 376,
              "end": 387
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
                  "name": "privateParam",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 388,
                  "end": 400
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 387,
              "end": 402
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 368,
            "end": 402
          }
        ],
        "start": 116,
        "end": 436
      },
      "abstract": false,
      "declare": true,
      "start": 100,
      "end": 436
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 452,
        "end": 453
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 467,
              "end": 478
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
                  "name": "publicConsParam",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 479,
                  "end": 494
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "int",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 501,
                      "end": 507
                    },
                    "start": 499,
                    "end": 507
                  },
                  "start": 496,
                  "end": 507
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 478,
              "end": 509
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 460,
            "end": 509
          }
        ],
        "start": 454,
        "end": 539
      },
      "abstract": false,
      "declare": true,
      "start": 438,
      "end": 539
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 539
}
```
