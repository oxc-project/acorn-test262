__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 221,
  "end": 2049,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 221,
      "end": 246,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 233,
          "end": 245,
          "id": {
            "type": "Identifier",
            "start": 233,
            "end": 245,
            "name": "console",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 240,
              "end": 245,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 242,
                "end": 245
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 248,
      "end": 282,
      "id": {
        "type": "Identifier",
        "start": 255,
        "end": 257,
        "name": "ts",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 260,
        "end": 281,
        "expression": {
          "type": "Literal",
          "start": 268,
          "end": 280,
          "value": "typescript",
          "raw": "\"typescript\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 284,
      "end": 2034,
      "id": {
        "type": "Identifier",
        "start": 293,
        "end": 302,
        "name": "watchMain",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 305,
        "end": 2034,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 365,
            "end": 392,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 371,
                "end": 391,
                "id": {
                  "type": "Identifier",
                  "start": 371,
                  "end": 386,
                  "name": "files",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 376,
                    "end": 386,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 378,
                      "end": 386,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 378,
                        "end": 384
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 389,
                  "end": 391,
                  "elements": []
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 397,
            "end": 436,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 403,
                "end": 435,
                "id": {
                  "type": "Identifier",
                  "start": 403,
                  "end": 430,
                  "name": "options",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 410,
                    "end": 430,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 412,
                      "end": 430,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 412,
                        "end": 430,
                        "left": {
                          "type": "Identifier",
                          "start": 412,
                          "end": 414,
                          "name": "ts",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 415,
                          "end": 430,
                          "name": "CompilerOptions",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 433,
                  "end": 435,
                  "properties": []
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 442,
            "end": 1210,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 448,
                "end": 1209,
                "id": {
                  "type": "Identifier",
                  "start": 448,
                  "end": 518,
                  "name": "host",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 452,
                    "end": 518,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 454,
                      "end": 518,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 454,
                        "end": 499,
                        "left": {
                          "type": "Identifier",
                          "start": 454,
                          "end": 456,
                          "name": "ts",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 457,
                          "end": 499,
                          "name": "WatchCompilerHostOfFilesAndCompilerOptions",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 499,
                        "end": 518,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 500,
                            "end": 517,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 500,
                              "end": 517,
                              "left": {
                                "type": "Identifier",
                                "start": 500,
                                "end": 502,
                                "name": "ts",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 503,
                                "end": 517,
                                "name": "BuilderProgram",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 521,
                  "end": 1209,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 531,
                      "end": 547,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 531,
                        "end": 540,
                        "name": "rootFiles",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 542,
                        "end": 547,
                        "name": "files",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 557,
                      "end": 564,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 557,
                        "end": 564,
                        "name": "options",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 557,
                        "end": 564,
                        "name": "options",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 575,
                      "end": 640,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 575,
                        "end": 600,
                        "name": "useCaseSensitiveFileNames",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 602,
                        "end": 640,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "MemberExpression",
                          "start": 608,
                          "end": 640,
                          "object": {
                            "type": "MemberExpression",
                            "start": 608,
                            "end": 614,
                            "object": {
                              "type": "Identifier",
                              "start": 608,
                              "end": 610,
                              "name": "ts",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 611,
                              "end": 614,
                              "name": "sys",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 615,
                            "end": 640,
                            "name": "useCaseSensitiveFileNames",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 650,
                      "end": 682,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 650,
                        "end": 660,
                        "name": "getNewLine",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 662,
                        "end": 682,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "MemberExpression",
                          "start": 668,
                          "end": 682,
                          "object": {
                            "type": "MemberExpression",
                            "start": 668,
                            "end": 674,
                            "object": {
                              "type": "Identifier",
                              "start": 668,
                              "end": 670,
                              "name": "ts",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 671,
                              "end": 674,
                              "name": "sys",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 675,
                            "end": 682,
                            "name": "newLine",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 692,
                      "end": 739,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 692,
                        "end": 711,
                        "name": "getCurrentDirectory",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "MemberExpression",
                        "start": 713,
                        "end": 739,
                        "object": {
                          "type": "MemberExpression",
                          "start": 713,
                          "end": 719,
                          "object": {
                            "type": "Identifier",
                            "start": 713,
                            "end": 715,
                            "name": "ts",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 716,
                            "end": 719,
                            "name": "sys",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 720,
                          "end": 739,
                          "name": "getCurrentDirectory",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 749,
                      "end": 816,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 749,
                        "end": 770,
                        "name": "getDefaultLibFileName",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 772,
                        "end": 816,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 772,
                            "end": 779,
                            "name": "options",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "CallExpression",
                          "start": 783,
                          "end": 816,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 783,
                            "end": 807,
                            "object": {
                              "type": "Identifier",
                              "start": 783,
                              "end": 785,
                              "name": "ts",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 786,
                              "end": 807,
                              "name": "getDefaultLibFilePath",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 808,
                              "end": 815,
                              "name": "options",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 827,
                      "end": 856,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 827,
                        "end": 837,
                        "name": "fileExists",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "MemberExpression",
                        "start": 839,
                        "end": 856,
                        "object": {
                          "type": "MemberExpression",
                          "start": 839,
                          "end": 845,
                          "object": {
                            "type": "Identifier",
                            "start": 839,
                            "end": 841,
                            "name": "ts",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 842,
                            "end": 845,
                            "name": "sys",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 846,
                          "end": 856,
                          "name": "fileExists",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 866,
                      "end": 891,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 866,
                        "end": 874,
                        "name": "readFile",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "MemberExpression",
                        "start": 876,
                        "end": 891,
                        "object": {
                          "type": "MemberExpression",
                          "start": 876,
                          "end": 882,
                          "object": {
                            "type": "Identifier",
                            "start": 876,
                            "end": 878,
                            "name": "ts",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 879,
                            "end": 882,
                            "name": "sys",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 883,
                          "end": 891,
                          "name": "readFile",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 901,
                      "end": 940,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 901,
                        "end": 916,
                        "name": "directoryExists",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "MemberExpression",
                        "start": 918,
                        "end": 940,
                        "object": {
                          "type": "MemberExpression",
                          "start": 918,
                          "end": 924,
                          "object": {
                            "type": "Identifier",
                            "start": 918,
                            "end": 920,
                            "name": "ts",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 921,
                            "end": 924,
                            "name": "sys",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 925,
                          "end": 940,
                          "name": "directoryExists",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 950,
                      "end": 987,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 950,
                        "end": 964,
                        "name": "getDirectories",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "MemberExpression",
                        "start": 966,
                        "end": 987,
                        "object": {
                          "type": "MemberExpression",
                          "start": 966,
                          "end": 972,
                          "object": {
                            "type": "Identifier",
                            "start": 966,
                            "end": 968,
                            "name": "ts",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 969,
                            "end": 972,
                            "name": "sys",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 973,
                          "end": 987,
                          "name": "getDirectories",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 997,
                      "end": 1032,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 997,
                        "end": 1010,
                        "name": "readDirectory",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "MemberExpression",
                        "start": 1012,
                        "end": 1032,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1012,
                          "end": 1018,
                          "object": {
                            "type": "Identifier",
                            "start": 1012,
                            "end": 1014,
                            "name": "ts",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1015,
                            "end": 1018,
                            "name": "sys",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1019,
                          "end": 1032,
                          "name": "readDirectory",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1042,
                      "end": 1067,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1042,
                        "end": 1050,
                        "name": "realpath",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "MemberExpression",
                        "start": 1052,
                        "end": 1067,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1052,
                          "end": 1058,
                          "object": {
                            "type": "Identifier",
                            "start": 1052,
                            "end": 1054,
                            "name": "ts",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1055,
                            "end": 1058,
                            "name": "sys",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1059,
                          "end": 1067,
                          "name": "realpath",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1078,
                      "end": 1106,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1078,
                        "end": 1087,
                        "name": "watchFile",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "TSNonNullExpression",
                        "start": 1089,
                        "end": 1106,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 1089,
                          "end": 1105,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1089,
                            "end": 1095,
                            "object": {
                              "type": "Identifier",
                              "start": 1089,
                              "end": 1091,
                              "name": "ts",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1092,
                              "end": 1095,
                              "name": "sys",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1096,
                            "end": 1105,
                            "name": "watchFile",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1116,
                      "end": 1154,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1116,
                        "end": 1130,
                        "name": "watchDirectory",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "TSNonNullExpression",
                        "start": 1132,
                        "end": 1154,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 1132,
                          "end": 1153,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1132,
                            "end": 1138,
                            "object": {
                              "type": "Identifier",
                              "start": 1132,
                              "end": 1134,
                              "name": "ts",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1135,
                              "end": 1138,
                              "name": "sys",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1139,
                            "end": 1153,
                            "name": "watchDirectory",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1164,
                      "end": 1203,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1164,
                        "end": 1177,
                        "name": "createProgram",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "MemberExpression",
                        "start": 1179,
                        "end": 1203,
                        "object": {
                          "type": "Identifier",
                          "start": 1179,
                          "end": 1181,
                          "name": "ts",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1182,
                          "end": 1203,
                          "name": "createAbstractBuilder",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1422,
            "end": 1467,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1428,
                "end": 1466,
                "id": {
                  "type": "Identifier",
                  "start": 1428,
                  "end": 1445,
                  "name": "origCreateProgram",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1448,
                  "end": 1466,
                  "object": {
                    "type": "Identifier",
                    "start": 1448,
                    "end": 1452,
                    "name": "host",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1453,
                    "end": 1466,
                    "name": "createProgram",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1472,
            "end": 1679,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1472,
              "end": 1679,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1472,
                "end": 1490,
                "object": {
                  "type": "Identifier",
                  "start": 1472,
                  "end": 1476,
                  "name": "host",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1477,
                  "end": 1490,
                  "name": "createProgram",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "start": 1493,
                "end": 1679,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1494,
                    "end": 1503,
                    "name": "rootNames",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 1505,
                    "end": 1512,
                    "name": "options",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 1514,
                    "end": 1518,
                    "name": "host",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 1520,
                    "end": 1530,
                    "name": "oldProgram",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 1535,
                  "end": 1679,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 1545,
                      "end": 1601,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1545,
                        "end": 1600,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1545,
                          "end": 1556,
                          "object": {
                            "type": "Identifier",
                            "start": 1545,
                            "end": 1552,
                            "name": "console",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1553,
                            "end": 1556,
                            "name": "log",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1557,
                            "end": 1599,
                            "value": "** We're about to create the program! **",
                            "raw": "\"** We're about to create the program! **\""
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "directive": null
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 1610,
                      "end": 1673,
                      "argument": {
                        "type": "CallExpression",
                        "start": 1617,
                        "end": 1672,
                        "callee": {
                          "type": "Identifier",
                          "start": 1617,
                          "end": 1634,
                          "name": "origCreateProgram",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1635,
                            "end": 1644,
                            "name": "rootNames",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 1646,
                            "end": 1653,
                            "name": "options",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 1655,
                            "end": 1659,
                            "name": "host",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 1661,
                            "end": 1671,
                            "name": "oldProgram",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1684,
            "end": 1738,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1690,
                "end": 1737,
                "id": {
                  "type": "Identifier",
                  "start": 1690,
                  "end": 1711,
                  "name": "origPostProgramCreate",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1714,
                  "end": 1737,
                  "object": {
                    "type": "Identifier",
                    "start": 1714,
                    "end": 1718,
                    "name": "host",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1719,
                    "end": 1737,
                    "name": "afterProgramCreate",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1744,
            "end": 1892,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1744,
              "end": 1891,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1744,
                "end": 1767,
                "object": {
                  "type": "Identifier",
                  "start": 1744,
                  "end": 1748,
                  "name": "host",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1749,
                  "end": 1767,
                  "name": "afterProgramCreate",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "start": 1770,
                "end": 1891,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1770,
                    "end": 1777,
                    "name": "program",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 1781,
                  "end": 1891,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 1791,
                      "end": 1844,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1791,
                        "end": 1843,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1791,
                          "end": 1802,
                          "object": {
                            "type": "Identifier",
                            "start": 1791,
                            "end": 1798,
                            "name": "console",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1799,
                            "end": 1802,
                            "name": "log",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1803,
                            "end": 1842,
                            "value": "** We finished making the program! **",
                            "raw": "\"** We finished making the program! **\""
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 1853,
                      "end": 1885,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1853,
                        "end": 1884,
                        "callee": {
                          "type": "TSNonNullExpression",
                          "start": 1853,
                          "end": 1875,
                          "expression": {
                            "type": "Identifier",
                            "start": 1853,
                            "end": 1874,
                            "name": "origPostProgramCreate",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1876,
                            "end": 1883,
                            "name": "program",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "directive": null
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2004,
            "end": 2032,
            "expression": {
              "type": "CallExpression",
              "start": 2004,
              "end": 2031,
              "callee": {
                "type": "MemberExpression",
                "start": 2004,
                "end": 2025,
                "object": {
                  "type": "Identifier",
                  "start": 2004,
                  "end": 2006,
                  "name": "ts",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2007,
                  "end": 2025,
                  "name": "createWatchProgram",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2026,
                  "end": 2030,
                  "name": "host",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2036,
      "end": 2048,
      "expression": {
        "type": "CallExpression",
        "start": 2036,
        "end": 2047,
        "callee": {
          "type": "Identifier",
          "start": 2036,
          "end": 2045,
          "name": "watchMain",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
